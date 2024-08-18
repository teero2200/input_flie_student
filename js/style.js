const fileInput = document.getElementById("fileInput");
const fileInputBox = document.getElementById("fileInputBox");
const previewImage = document.getElementById("previewImage");
const uploadText = document.getElementById("uploadText");

fileInputBox.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      previewImage.style.display = "block";
      uploadText.style.display = "none"; // ซ่อนข้อความเมื่อรูปภาพถูกอัพโหลด
    };
    reader.readAsDataURL(file);
  }
});
