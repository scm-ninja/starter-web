# EMFT SSL Certificate Management Procedure
## (Entrust external certs for MOVEit Transfer)
NOTE: Please, defer back to the AA SSL CertManagement Portal for the latest updates to the overall process. Please, review the documentation in the “Available User Guides” tab.
AA SSL CertManagement SharePoint Portal:
http://sharepoint.aa.com/Services/ITS/ITSecurity/Pages/SSLCertManagement.aspx
 
![image](https://user-images.githubusercontent.com/70411712/136114809-418b0772-3d0e-4e6b-ac58-60deddcc2ea0.png)

## Generate CSR: 
## Start off by accessing the IIS Manager > Server Certificates from the server you are certifying:
![image](https://user-images.githubusercontent.com/70411712/136114868-e5d20071-ec31-470c-b871-cfb99999a793.png)

![image](https://user-images.githubusercontent.com/70411712/136114883-5f74a84b-c595-4014-9e5b-94f3fe379c8d.png)

## Click “Create Certificate Request…” from Actions menu:
![image](https://user-images.githubusercontent.com/70411712/136114950-3a34f63b-642f-445e-af23-330495f6db26.png)

## Fill out the information as shown:
Update CSR Information:

- Common Name: esapp????.corpaa.aa.com
- Organization: American Airlines Inc
- Organization Unit: "[no ou]" (Entrust), "PKI-Web - Temp" (Venafi)
- Locality: Fort Worth
- State: Texas
- Country: US
 
![image](https://user-images.githubusercontent.com/70411712/136114977-3ef73f39-ea99-4aef-a4bd-f4b0787aca1a.png)

## Select “2048” bit length and default MS Cryptographic Service Provider:
 
![image](https://user-images.githubusercontent.com/70411712/136116106-3e6c1924-bbec-4cac-99ff-9df4b7a473bb.png)

## Save the CSR and copy it off the server:
 
![image](https://user-images.githubusercontent.com/70411712/136116152-decc20ad-15f6-4e59-b0f6-12e59173f700.png)

## Go to the AA Entrust portal:

## ![image](https://user-images.githubusercontent.com/70411712/136116278-a95ed2fe-58d6-469c-be40-49cf4d9923ff.png)
[Entrust Certificate Services](https://cloud.entrust.net/eform/certificate?ep=bSjn5ltZ2U1Ce2-mc1BSU3xuMoFLExvmLu1EXdbVDOOQgatQhpnthRWfvun1BDvWmJIY87JKKhdQCNruzexFY_vof7oDB7Zg7cDfgKXrPGbwgVhARwnQYQYxWy2aD1_k)
- ALL cert requests are “New” (even renew, etc.)
- Select: SSL/TLS
- Password is: gr82ussl
 
![image](https://user-images.githubusercontent.com/70411712/136116291-4961a2df-2489-4e7b-8ebe-ea72a8a134b3.png)

![image](https://user-images.githubusercontent.com/70411712/136116307-beb3179c-ec6c-4cc8-9adc-fe4430516dc5.png)


## Use the Advanced (for two domains) and EV Multi for 3 or more.

![image](https://user-images.githubusercontent.com/70411712/136116338-52f8e24d-90a8-435b-8839-76aa985894b0.png)

## Complete “Certificate Details” like shown:
 
 ![image](https://user-images.githubusercontent.com/70411712/136116350-c69a11fc-48ba-4ffb-9f5e-c55a90c499c9.png)
 
 ![image](https://user-images.githubusercontent.com/70411712/136116367-1d406cc8-e2e1-4d82-aba4-76c72f1841e4.png)

 
## Click next after pasting CSR in box field: 
![image](https://user-images.githubusercontent.com/70411712/136116380-961ca61b-e855-4e13-861c-36f723bf23f9.png)

## Add ALL the domains needed: 
![image](https://user-images.githubusercontent.com/70411712/136116417-b8e6ada7-294c-4c13-b649-653cbb75a4f5.png)


## Click next;
 ![image](https://user-images.githubusercontent.com/70411712/136116440-864f7bf4-cab9-46a6-bb02-ef11ecd8f2c0.png)

## Complete “Additional Information” like shown:
 
![image](https://user-images.githubusercontent.com/70411712/136116467-0a329d7c-9524-4047-bb15-9d06f4f87bab.png)

## Click Yes:
 
![image](https://user-images.githubusercontent.com/70411712/136116484-f9c58642-1c61-4395-900b-c55cebb3ea15.png)

![image](https://user-images.githubusercontent.com/70411712/136116536-6bab7e3b-4b2a-4a43-bd92-3244002d3e06.png)

  
## Once the Entrust response email is received (usually same day), copy the new certificate to the server:
![image](https://user-images.githubusercontent.com/70411712/136116609-af1dba26-250f-4612-8e46-7e3f00d1ee46.png)

This link has the best cert install instructions:
http://www.entrust.net/knowledge-base/technote.cfm?tn=8713 
Also, issues with “successful” installs where certificate disappears from IIS cert manager can be resolved with these steps: https://www.namecheap.com/support/knowledgebase/article.aspx/9773/2238/ssl-disappears-from-the-certificate-list-on-windows-server 
This process works everytime:

![image](https://user-images.githubusercontent.com/70411712/136116652-6a480afb-6ef2-4551-8b24-9337d1de96cc.png)
Purpose: [SSL/TLS Certificate Installation Guide](https://www.entrust.com/get-support/ssl-certificate-support/installation-help/)
For Microsoft IIS8
![image](https://user-images.githubusercontent.com/70411712/136114772-bf5bdb5b-53c0-41fc-982f-58995675e139.png)
Need Certificate Signing Request (CSR) help? Please see our technote on how to generate a CSR in IIS 8/8.5 [here](https://www.entrustdatacard.com/knowledgebase/How-to-generate-a-CSR-using-Microsoft-IIS8?r=1&ui-knowledge-aloha-components-aura-components-knowledgeone.ArticleActions.handleEditPublished=1).

[There's a video for this guide. Watch the video here](https://youtu.be/-cFDqhNRbcQ)


## The installation is in three parts:
1) [Importing CA certificate using Microsoft Management Console (MMC0](https://www.entrust.net/pickup/certificatePickupWizard#import).
2) [Installing the certificate on the server](https://www.entrust.net/pickup/certificatePickupWizard#install).
3) [Bind Certificate to website](https://www.entrust.net/pickup/certificatePickupWizard#bind)

## Part 1 of 3: Importing CA certificate using Microsoft Management Console (MMC)
1.	Click the link in the email ‘You may also use the following URL to pick up and install your certificate.
![image](https://user-images.githubusercontent.com/70411712/136116857-37305aee-0adf-4caa-aca2-55e13552cd17.png)
2.	In the ‘Entrust’ site click ‘Next’.
3.	Click the Download button on left pane to download your certificate files. Clicking the download button will produce a zip file that includes your Server Certificate, the Entrust chain/intermediate certificates(s) and the Entrust Root certificate. Extract the files from the zip file. 
![image](https://user-images.githubusercontent.com/70411712/136116890-201b6f42-8d74-4a0e-aa5b-060d12e50b5e.png)
  
4. On the server, go to Start > Run > type MMC and hit enter.
5. Click File > Add Remove Snap-in.
![image](https://user-images.githubusercontent.com/70411712/136116989-052d7b50-29f5-4067-a19e-30a6d296cc7a.png)

 4. Select Certificates and click Add.

  

5. Select Computer Account, click Next, and click Finish.
 

6. Click OK to close the window. 

7. Expand Certificates on the left hand side of the console window.

 8. Expand the Trusted Root Certification Authorities folder and click on the Certificates sub-folder.

9. Right click on the Certificates sub-folder under Trusted Root Certification Authorities and select All Tasks > Import. 

10. In the import wizard, browse to the Root.crt file downloaded in step 1 and complete the wizard. 

11. In the MMC console, expand the Intermediate Certification Authorities folder. Right click on the Certificates sub-folder and select All Tasks > Import.

 12. In the import wizard, browse to the Intermediate.crt file downloaded in step 1 and complete the wizard to complete the certificate chain setup process. You should see your Entrust Intermediate certificates listed in the Intermediate Certification Authorities folder. You are now ready to install your signed server certificate.

 
Part 2 of 3: Installing the certificate on the server
1.	Launch the Server Manager
- From within the Server Manager at the top right corner Select: Tools | Internet Information Services (IIS) Manager

 2. From the left hand side under "Connections" select the workstations name
- Once the name is selected, look to the center of the screen and locate "Server Certificates". Once selected double click.

 3. Once in the "Server Certificates" to the upper right hand side under "Actions" select: Complete Certificate Request.

 4. You will now need to provide the information listed in the screenshot below:

 - File name containing the certification authority's response: Provide the path to the Server certificate downloaded from Entrust.net, the default name of the Server certificate file name is "ServerCertificate.crt"
 - PLEASE NOTE: You may need to change the file type view setting at the lower right corner of the browser window to be able to see the ServerCertificate.crt (or other files types besides .crt)

 - Friendly Name: The friendly name is not linked to the certificate download from Entrust.net, it is used as an identifier after the certificate is installed. You should provide a unique Friendly Name so that you can easily identify what the certificate is used for.

- Select a certificate store for the new certificate: leave the selection set to Personal

Once you have provided the above information select: OK

The certificate is now installed
NOTE: If you don’t see the cert when you are trying to bind it, check the cert store that the new cert has the private key also, if not IIS won’t see it.
Example of cert with private key
 
Example of a cert WITHOUT private key
 

 
Part 3 of 3: Bind Certificate to website
1. From the left hand side of the IIS Manager, under Connections
 - Expand the Server Name
 - Now expand the Sites folder and select the site you wish to bind the certificate to
 - From the right hand side under Actions, Select: Bindings...

 2. From the Site Bindings menu Select: Add

3. From the Add Site Binding, change the settings listed below:
  - Type: HTTPS
  - SSL Certificate: Select the friendly name of the certificate you wish to bind to the site, you can verify that you have selected the correct certificate by clicking on View... 
  - Once you have configured the settings Select: OK

 4. Now that the bindings has been updated you need to restart the web site
   - From the right hand side under Actions | Manage Website
   - Select: Restart

 
 
 	Your SSL/TLS certificate should now be installed.

Open the IIS Manager, select the web site “moveitdmz” and Actions, Edit Site > Bindings 
(do this for each host name listed in the SAN for the certificate):
 
 

Select the “https” type entry and click “Edit…”:
 
Click “Select…”:
 
 
Select the new certificate and click “OK”:
 
Click “OK”:
 
When all SAN’s have been bound it will look like this:
 
 
Open a browser and the web site with the new cert:
 
View the certificate and verify the expiration and alternate names details:
 
  
The last part is to update the sharepoint document when the certs are track: https://spteam.aa.com/:x:/r/sites/EIS/EntEng/SysEng/EMFT/_layouts/15/Doc.aspx?sourcedoc=%7BE836078A-9D30-41B3-BB83-E49085DF81F3%7D&file=EMFT_SSL_Cert_Tracker.xlsx&action=default&mobileredirect=true

 
