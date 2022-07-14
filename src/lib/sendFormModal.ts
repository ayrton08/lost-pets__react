import Swal from "sweetalert2";

export function result(message: String) {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    background: "#2471A3",
    color: "#D6EAF8",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: message,
  });
}
