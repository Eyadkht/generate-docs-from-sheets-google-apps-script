function copyDocumentByID(documentId,folderId,newFileName) {
  
  var folder = DriveApp.getFolderById(folderId);
  var file = DriveApp.getFileById(documentId)
  newFile = file.makeCopy(newFileName, folder);
  
  return newFile.getId()
  
}