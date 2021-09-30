export function checkValidationImage(file) {
  if (!file) {
    alert("파일이 없습니다.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한 5MB)");
    return;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg또는 png만 업로드가능");
    return false;
  }
  return file;
}
