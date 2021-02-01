function processApplications() 
{
  // Get the spreadsheet object
  var spreadSheet = SpreadsheetApp.openById(SHEET_ID);
  
  // Fetch Active Sheet
  var sheet = spreadSheet.getActiveSheet();

  // Get the last row in the Sheet
  var lastRow = sheet.getLastRow();

  // the rows are indexed starting at 1, and the first row is the header, so start with row 2
  var startRow = 2;
  var startCol = 1;
  var rowSize = 1;
  var colSize = 30;
  
  // Looping through the Sheet Records
  for (i = startRow; i <= lastRow; i++) 
  {
    
    range = sheet.getRange(i,startCol,rowSize,colSize); // getRange(row_start, col_start, row_end, col_end)

    values = range.getValues(); 
    
    date = Utilities.formatDate(values[0][0], TIME_ZONE, "MM-dd-yyyy | HH:mm:ss");
    
    // Name of the new File
    newFileName = values[0][1]+"_document"
    
    newFileId = copyDocumentByID(TEMPLATE_ID,TARGET_FOLDER_ID,newFileName)
    
    var doc = DocumentApp.openById(newFileId);
    
    // Mapping Record data to Template Fields
    for (j = 0; j <= colSize; j++) 
    {
      if(j in KEYS)
      {
        if(KEYS[j]=="TIMESTAMP_PLACEHOLDER")
        {
          Logger.log(KEYS[j]+": %s",date)
          doc.getBody().replaceText(KEYS[j],date);
        }
        else{
          Logger.log(KEYS[j]+": %s",values[0][j])
          doc.getBody().replaceText(KEYS[j],values[0][j]);
        }
      }
    }
    Logger.log("##################################")
  }
               
}