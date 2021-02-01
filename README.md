# Description
Create documents from a Google Sheet based on a template using Google Apps Script.

# Instructions
### 1.Create a new Google Sheet.  
Copy the data in the spreadsheet_example file as a sample.   
Get the Id of the Sheet and insert it into SHEET_ID variable in Settings.gs file  

![How to get file/folder ID from Google Drive](https://ploi.io/storage/39/Image-2019-02-14-at-11.16.51-AM.png)  

### 2.Create a new Google Document Template file.
This is the file that will be used as a template for generating new documents.  
Copy the data in the template.docx file as a sample.  
Get the Id of the Document and insert it into TEMPLATE_ID variable in Settings.gs file  

### 3.Create a new empty folder in Google Drive
This is where the the newly generated files will be saved.  
Get the Id of the Folder and insert it into TARGET_FOLDER_ID variable in Settings.gs file  

### 4. Run the Script
#### A) Using Triggers
-On the left-hand side, click on Triggers  
-Click on Add Trigger  
-Choose your preferred trigger method

#### B) Manual Run
-Go to Code.gs file.  
-Click on the Run button.  
