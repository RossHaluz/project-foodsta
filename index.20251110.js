!function(){var e,a,n,t;new Swiper(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper__btn--next",prevEl:".swiper__btn--prev"}});e=document.querySelector(".js-menu-container"),a=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),t=function(){var n="true"===a.getAttribute("aria-expanded")||!1;a.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},a.addEventListener("click",t),n.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),a.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtnO:document.querySelector("[data-modal-offerings]"),openModalBtnH:document.querySelector("[data-modal-header]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function a(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("backdrop--is-hidden")}e.openModalBtn.addEventListener("click",a),e.openModalBtnO.addEventListener("click",a),e.openModalBtnH.addEventListener("click",a),e.closeModalBtn.addEventListener("click",a)}();var o=new JustValidate("#form",{errorLabelStyle:{color:"#FF705D"}}),r=document.querySelector("#phone");new Inputmask("+38(099)999-99-99").mask(r),o.addField("#name",[{rule:"required",errorMessage:"The name must be between 3 and 25 characters"},{rule:"minLength",value:3,errorMessage:"The name must be between 3 and 25 characters"}]).addField("#email",[{rule:"required",errorMessage:"Please enter a valid email address"},{rule:"email",errorMessage:"Please enter a valid email address"}]).addField("#phone",[{validator:function(e){var a=r.inputmask.unmaskedvalue();return Boolean(Number(a)&&a.length>8)},errorMessage:"This phone must be in the format  099 000 00 00"},{validator:function(e){var a=r.inputmask.unmaskedvalue();return Boolean(Number(a)&&9===a.length)},errorMessage:"This phone must be in the format  099 000 00 00"}])}();
//# sourceMappingURL=index.20251110.js.map