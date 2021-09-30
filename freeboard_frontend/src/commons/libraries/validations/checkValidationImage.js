export function checkValidationImage() {
  if (!myFile) {
    alert("파일이 없습니다.");
    return;
  }

  if (myFile.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한 5MB)");
    return;
  }

  if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
    alert("jpeg또는 png만 업로드가능");
    return;
  }
}
