import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def handler(event, context):
    sns= boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:eu-central-1:678065156459:DeployDone')
    location = {
        "bucketName" : "pip-ehsan-pourhadi.com",
        "objectKey" :  "portfoliobuild.zip"
    } 
    try:
        job = event.get("CodePipeline.job")
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]
        
        print "build from " +   str(location)   
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4') )
    
        site_bucket= s3.Bucket('ehsan-pourhadi.com')
        build_bucket= s3.Bucket(location["bucketName"])
        
        site_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"], site_zip)
        
        with zipfile.ZipFile(site_zip) as myzip:
            for nm in myzip.namelist():
                obj= myzip.open(nm)
                site_bucket.upload_fileobj(obj,nm,ExtraArgs = {'ContentType': mimetypes.guess_type(nm)[0]})
                site_bucket.Object(nm).Acl().put(ACL='public-read')
                
        topic.publish(Subject="Website updated" , Message="Update completed") 
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
            
         
         
    except:
         topic.publish(Subject="Website updated failed" , Message="Update Failed")
         raise
        
    return "done"

