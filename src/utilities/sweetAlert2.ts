import Swal from 'sweetalert2';
import type { SweetAlertIcon } from 'sweetalert2';

interface Alert {
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
  title: string;
  text: string;
  handleConfirm?: (() => void) | null;
  handleCancel?: (() => void) | null;
}

// MARK: deleteAlert
// #region XXXXXXXXXXXXX
/**
 * 一般提示框
 * @param icon 提示框圖示
 * @param title 提示框標題
 * @param text 提示框內容
 * @returns void
 */
const easyAlert = (icon: SweetAlertIcon, title: string, text: string) => {
  Swal.fire({
    icon,
    title,
    text,
  });
};

/**
 * 刪除提示框
 * @param title 提示框標題
 * @param handleConfirm 確認後的 callback
 * @returns void
 */
const deleteAlert = ({ title, handleConfirm }: Alert) => {
  Swal.fire({
    title,
    text: '你將無法復原！',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#f00',
    cancelButtonColor: '#ccc',
    confirmButtonText: '刪除',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      handleConfirm && handleConfirm();
      Swal.fire({
        title: 'Deleted!',
        text: 'Your file has been deleted.',
        icon: 'success',
      });
    }
  });
};

export { easyAlert, deleteAlert };
