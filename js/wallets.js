const walletItems = document.querySelectorAll('.wallets__item');

walletItems.forEach((walletItem) => {
  walletItem.addEventListener('click', (event) => {
    const contract = event.currentTarget.querySelector('.wallets__item-contract');
    if (contract) {
      navigator.clipboard.writeText(contract.innerText);
      walletItems.forEach((item) => item.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }
  });
});
