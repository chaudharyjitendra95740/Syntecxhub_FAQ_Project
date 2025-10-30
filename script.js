const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    item.classList.toggle('active');
  });

  question.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.classList.toggle('active');
    }
  });
});
