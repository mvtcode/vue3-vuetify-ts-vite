import { ElMessageBox, ElMessage } from "element-plus";

export const confirm = (text: string, callback: any) => {
  ElMessageBox.confirm(text).then(() => {
    if (callback) callback();
  });
};

export const showSuccess = (text: string) => {
  ElMessage({
    message: text,
    type: "success",
    grouping: true,
  });
};

export const showError = (text: string) => {
  ElMessage({
    message: text,
    type: "warning",
    grouping: true,
  });
};
