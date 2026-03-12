document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(function () {
      submitBtn.textContent = 'Message sent';
      form.reset();
      setTimeout(function () {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2000);
    }, 600);
  });
});
