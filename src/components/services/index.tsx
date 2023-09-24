import { Fade } from 'react-awesome-reveal';
import styles from './index.module.css'

export default function Services() {
  return (
    <section className={styles.services_container}>
      <div className={styles.service_main}>
        <Fade direction='left' triggerOnce={true}>
          <h2>What we provide</h2>
          <p>Risus odio lobortis ullamcorper felis vitae bibendum mi. Penatibus fusce consequat donec vitae porttitor elementum.</p>
        </Fade>
      </div>
      <div className={styles.services_list_container}>
        <div className={styles.service_item}>
          <Fade direction='up' triggerOnce={true}>
            <span className={styles.icon}><svg className="services-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2519 19.1628C38.916 15.4849 38.916 11.6017 35.2519 7.92636C35.1314 7.80535 34.9679 7.73734 34.7975 7.7373H29.6549C29.5217 7.73738 29.3918 7.77897 29.2832 7.85634C29.1746 7.93371 29.0926 8.04303 29.0486 8.1692C29.0045 8.29537 29.0006 8.43215 29.0374 8.56065C29.0742 8.68915 29.1498 8.80301 29.2538 8.8865C33.2078 12.0605 33.2161 15.0216 29.2538 18.2027C29.2351 18.2175 29.2173 18.2335 29.2004 18.2504C25.5364 21.9284 25.5364 25.8115 29.2004 29.4868C29.2173 29.5038 29.2351 29.5197 29.2538 29.5346C33.2078 32.7086 33.2161 35.6697 29.2538 38.8508C29.1499 38.9341 29.0744 39.0477 29.0376 39.176C29.0007 39.3042 29.0044 39.4408 29.0482 39.5668C29.0919 39.6929 29.1734 39.8022 29.2817 39.8798C29.3899 39.9574 29.5194 39.9993 29.6523 40H34.7949C34.9654 39.9999 35.1288 39.9319 35.2494 39.8109C38.9134 36.133 38.9134 32.2498 35.2494 28.5745C32.052 25.3637 32.052 22.3736 35.2519 19.1628Z" fill="#EB1616"></path><path d="M24.9624 19.1628C28.6265 15.4849 28.6265 11.6017 24.9624 7.92636C24.8419 7.80535 24.6784 7.73734 24.5079 7.7373H19.3654C19.2321 7.73724 19.1022 7.77874 18.9935 7.85606C18.8847 7.93338 18.8026 8.0427 18.7585 8.1689C18.7144 8.29509 18.7104 8.43194 18.7472 8.56049C18.7839 8.68905 18.8596 8.80297 18.9636 8.8865C22.9176 12.0605 22.9266 15.0216 18.9636 18.2027C18.9449 18.2175 18.9271 18.2335 18.9103 18.2504C15.2462 21.9284 15.2462 25.8115 18.9103 29.4868C18.9271 29.5038 18.9449 29.5197 18.9636 29.5346C22.9176 32.7086 22.9266 35.6697 18.9636 38.8508C18.8597 38.9342 18.7841 39.0479 18.7473 39.1763C18.7105 39.3047 18.7143 39.4413 18.7582 39.5674C18.8021 39.6936 18.8839 39.8029 18.9923 39.8804C19.1007 39.9578 19.2304 39.9996 19.3635 40H24.506C24.6765 39.9999 24.84 39.9319 24.9605 39.8109C28.6246 36.133 28.6246 32.2498 24.9605 28.5745C21.7631 25.3637 21.7631 22.3736 24.9624 19.1628Z" fill="#EB1616"></path><path d="M14.6734 7.92636C14.6137 7.86637 14.5427 7.81878 14.4646 7.78634C14.3865 7.7539 14.3028 7.73724 14.2183 7.7373H9.07254C8.9393 7.73724 8.80934 7.77874 8.70062 7.85606C8.5919 7.93338 8.50981 8.0427 8.46569 8.1689C8.42157 8.29509 8.4176 8.43194 8.45435 8.56049C8.49109 8.68905 8.56672 8.80297 8.67078 8.8865C12.6267 12.0579 12.6363 15.0235 8.67078 18.2027C8.65231 18.2175 8.63471 18.2335 8.61807 18.2504C6.78732 20.0887 5.85844 21.9787 5.85844 23.8686C5.85844 24.0398 5.92617 24.2039 6.04672 24.3249C6.16727 24.4459 6.33078 24.5139 6.50126 24.5139H11.6438C11.8143 24.5139 11.9778 24.4459 12.0984 24.3249C12.2189 24.2039 12.2866 24.0398 12.2866 23.8686C12.2866 22.3336 13.0889 20.7501 14.6709 19.1628C18.3362 15.4874 18.3362 11.6017 14.6734 7.92636Z" fill="#EB1616"></path><path d="M18.1658 13.8744L33.9027 1.14803C34.0269 1.04773 34.1095 0.904673 34.1346 0.746636C34.1596 0.588599 34.1253 0.426857 34.0382 0.292813C33.9511 0.158768 33.8175 0.0619845 33.6634 0.0212529C33.5092 -0.0194787 33.3455 -0.00125212 33.2039 0.0723938L14.5621 9.75119C14.4765 9.79565 14.402 9.85887 14.344 9.93616C14.2861 10.0134 14.2461 10.1028 14.2272 10.1977L14.1488 10.5945L11.2407 8.27162C12.0259 7.22383 12.3839 5.91511 12.2418 4.61176C12.0997 3.30841 11.4683 2.10836 10.476 1.25577C9.48368 0.403185 8.20504 -0.0378693 6.90023 0.0223498C5.59543 0.0825689 4.3625 0.639537 3.45231 1.57993C2.54212 2.52031 2.02306 3.77347 2.00075 5.0844C1.97844 6.39534 2.45454 7.66556 3.33219 8.63661C4.20985 9.60767 5.4231 10.2066 6.7251 10.3115C8.02709 10.4164 9.32 10.0195 10.3407 9.20143L13.8653 12.0193L12.9937 16.4005L10.3395 18.546C9.7865 18.1049 9.14888 17.783 8.46642 17.6005C7.78396 17.4179 7.07132 17.3785 6.37302 17.4848C5.67472 17.5911 5.00575 17.8408 4.40791 18.2183C3.81007 18.5958 3.29619 19.0929 2.89837 19.6787C2.50055 20.2645 2.22734 20.9264 2.0958 21.6229C1.96426 22.3195 1.97722 23.0358 2.13386 23.7271C2.29051 24.4184 2.58747 25.0699 3.00622 25.6408C3.42496 26.2117 3.95648 26.6898 4.56758 27.0453C3.77692 27.5137 3.12334 28.1832 2.6728 28.9862C2.22225 29.7892 1.99068 30.6973 2.00145 31.6188C2.00145 31.7899 2.06917 31.9541 2.18972 32.0751C2.31028 32.1961 2.47378 32.2641 2.64427 32.2641C2.81475 32.2641 2.97826 32.1961 3.09881 32.0751C3.21936 31.9541 3.28709 31.7899 3.28709 31.6188C3.28709 31.2226 3.41886 27.7473 7.14401 27.7473C8.10108 27.7493 9.03965 27.4826 9.85369 26.9774C10.6677 26.4721 11.3248 25.7485 11.7507 24.8881C12.1766 24.0278 12.3544 23.0651 12.2639 22.1087C12.1734 21.1523 11.8184 20.2403 11.2388 19.4758L14.1437 17.1277L14.2272 17.5497C14.2461 17.6446 14.2861 17.734 14.344 17.8113C14.402 17.8886 14.4765 17.9518 14.5621 17.9962L33.2039 27.675C33.3455 27.7487 33.5092 27.7669 33.6634 27.7262C33.8175 27.6854 33.9511 27.5887 34.0382 27.4546C34.1253 27.3206 34.1596 27.1588 34.1346 27.0008C34.1095 26.8427 34.0269 26.6997 33.9027 26.5994L18.1658 13.8744ZM3.28709 5.16215C3.28709 4.39644 3.51329 3.64792 3.93709 3.01125C4.3609 2.37458 4.96327 1.87836 5.66803 1.58533C6.37279 1.29231 7.14828 1.21564 7.89645 1.36502C8.64462 1.5144 9.33186 1.88313 9.87126 2.42457C10.4107 2.96601 10.778 3.65585 10.9268 4.40685C11.0756 5.15785 10.9993 5.93629 10.7073 6.64371C10.4154 7.35114 9.92106 7.95579 9.2868 8.3812C8.65253 8.80661 7.90683 9.03367 7.14401 9.03367C6.12145 9.03247 5.14112 8.6242 4.41807 7.89841C3.69501 7.17261 3.28828 6.18857 3.28709 5.16215ZM28.1256 4.16201L14.5544 15.1371L15.4274 10.7552L28.1256 4.16201ZM7.14401 26.4561C6.38118 26.4561 5.63548 26.2291 5.00122 25.8037C4.36695 25.3783 3.8726 24.7736 3.58068 24.0662C3.28876 23.3588 3.21238 22.5803 3.3612 21.8293C3.51002 21.0783 3.87735 20.3885 4.41675 19.847C4.95615 19.3056 5.64339 18.9369 6.39156 18.7875C7.13973 18.6381 7.91522 18.7148 8.61998 19.0078C9.32474 19.3008 9.92711 19.7971 10.3509 20.4337C10.7747 21.0704 11.0009 21.8189 11.0009 22.5846C10.9999 23.6111 10.5932 24.5952 9.87013 25.3211C9.14704 26.0469 8.16661 26.4551 7.14401 26.4561ZM15.4274 16.9916L15.2725 16.2173L17.1405 14.7061L28.1256 23.5848L15.4274 16.9916Z" fill="white"></path></svg></span>
            <h3>Haircut</h3>
            <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.</p>
            <span>$300</span>
          </Fade>
        </div>
        <div className={styles.service_item}>
          <Fade direction='up' triggerOnce={true}>
            <span className={styles.icon}><svg className="services-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2519 19.1628C38.916 15.4849 38.916 11.6017 35.2519 7.92636C35.1314 7.80535 34.9679 7.73734 34.7975 7.7373H29.6549C29.5217 7.73738 29.3918 7.77897 29.2832 7.85634C29.1746 7.93371 29.0926 8.04303 29.0486 8.1692C29.0045 8.29537 29.0006 8.43215 29.0374 8.56065C29.0742 8.68915 29.1498 8.80301 29.2538 8.8865C33.2078 12.0605 33.2161 15.0216 29.2538 18.2027C29.2351 18.2175 29.2173 18.2335 29.2004 18.2504C25.5364 21.9284 25.5364 25.8115 29.2004 29.4868C29.2173 29.5038 29.2351 29.5197 29.2538 29.5346C33.2078 32.7086 33.2161 35.6697 29.2538 38.8508C29.1499 38.9341 29.0744 39.0477 29.0376 39.176C29.0007 39.3042 29.0044 39.4408 29.0482 39.5668C29.0919 39.6929 29.1734 39.8022 29.2817 39.8798C29.3899 39.9574 29.5194 39.9993 29.6523 40H34.7949C34.9654 39.9999 35.1288 39.9319 35.2494 39.8109C38.9134 36.133 38.9134 32.2498 35.2494 28.5745C32.052 25.3637 32.052 22.3736 35.2519 19.1628Z" fill="#EB1616"></path><path d="M24.9624 19.1628C28.6265 15.4849 28.6265 11.6017 24.9624 7.92636C24.8419 7.80535 24.6784 7.73734 24.5079 7.7373H19.3654C19.2321 7.73724 19.1022 7.77874 18.9935 7.85606C18.8847 7.93338 18.8026 8.0427 18.7585 8.1689C18.7144 8.29509 18.7104 8.43194 18.7472 8.56049C18.7839 8.68905 18.8596 8.80297 18.9636 8.8865C22.9176 12.0605 22.9266 15.0216 18.9636 18.2027C18.9449 18.2175 18.9271 18.2335 18.9103 18.2504C15.2462 21.9284 15.2462 25.8115 18.9103 29.4868C18.9271 29.5038 18.9449 29.5197 18.9636 29.5346C22.9176 32.7086 22.9266 35.6697 18.9636 38.8508C18.8597 38.9342 18.7841 39.0479 18.7473 39.1763C18.7105 39.3047 18.7143 39.4413 18.7582 39.5674C18.8021 39.6936 18.8839 39.8029 18.9923 39.8804C19.1007 39.9578 19.2304 39.9996 19.3635 40H24.506C24.6765 39.9999 24.84 39.9319 24.9605 39.8109C28.6246 36.133 28.6246 32.2498 24.9605 28.5745C21.7631 25.3637 21.7631 22.3736 24.9624 19.1628Z" fill="#EB1616"></path><path d="M14.6734 7.92636C14.6137 7.86637 14.5427 7.81878 14.4646 7.78634C14.3865 7.7539 14.3028 7.73724 14.2183 7.7373H9.07254C8.9393 7.73724 8.80934 7.77874 8.70062 7.85606C8.5919 7.93338 8.50981 8.0427 8.46569 8.1689C8.42157 8.29509 8.4176 8.43194 8.45435 8.56049C8.49109 8.68905 8.56672 8.80297 8.67078 8.8865C12.6267 12.0579 12.6363 15.0235 8.67078 18.2027C8.65231 18.2175 8.63471 18.2335 8.61807 18.2504C6.78732 20.0887 5.85844 21.9787 5.85844 23.8686C5.85844 24.0398 5.92617 24.2039 6.04672 24.3249C6.16727 24.4459 6.33078 24.5139 6.50126 24.5139H11.6438C11.8143 24.5139 11.9778 24.4459 12.0984 24.3249C12.2189 24.2039 12.2866 24.0398 12.2866 23.8686C12.2866 22.3336 13.0889 20.7501 14.6709 19.1628C18.3362 15.4874 18.3362 11.6017 14.6734 7.92636Z" fill="#EB1616"></path><path d="M18.1658 13.8744L33.9027 1.14803C34.0269 1.04773 34.1095 0.904673 34.1346 0.746636C34.1596 0.588599 34.1253 0.426857 34.0382 0.292813C33.9511 0.158768 33.8175 0.0619845 33.6634 0.0212529C33.5092 -0.0194787 33.3455 -0.00125212 33.2039 0.0723938L14.5621 9.75119C14.4765 9.79565 14.402 9.85887 14.344 9.93616C14.2861 10.0134 14.2461 10.1028 14.2272 10.1977L14.1488 10.5945L11.2407 8.27162C12.0259 7.22383 12.3839 5.91511 12.2418 4.61176C12.0997 3.30841 11.4683 2.10836 10.476 1.25577C9.48368 0.403185 8.20504 -0.0378693 6.90023 0.0223498C5.59543 0.0825689 4.3625 0.639537 3.45231 1.57993C2.54212 2.52031 2.02306 3.77347 2.00075 5.0844C1.97844 6.39534 2.45454 7.66556 3.33219 8.63661C4.20985 9.60767 5.4231 10.2066 6.7251 10.3115C8.02709 10.4164 9.32 10.0195 10.3407 9.20143L13.8653 12.0193L12.9937 16.4005L10.3395 18.546C9.7865 18.1049 9.14888 17.783 8.46642 17.6005C7.78396 17.4179 7.07132 17.3785 6.37302 17.4848C5.67472 17.5911 5.00575 17.8408 4.40791 18.2183C3.81007 18.5958 3.29619 19.0929 2.89837 19.6787C2.50055 20.2645 2.22734 20.9264 2.0958 21.6229C1.96426 22.3195 1.97722 23.0358 2.13386 23.7271C2.29051 24.4184 2.58747 25.0699 3.00622 25.6408C3.42496 26.2117 3.95648 26.6898 4.56758 27.0453C3.77692 27.5137 3.12334 28.1832 2.6728 28.9862C2.22225 29.7892 1.99068 30.6973 2.00145 31.6188C2.00145 31.7899 2.06917 31.9541 2.18972 32.0751C2.31028 32.1961 2.47378 32.2641 2.64427 32.2641C2.81475 32.2641 2.97826 32.1961 3.09881 32.0751C3.21936 31.9541 3.28709 31.7899 3.28709 31.6188C3.28709 31.2226 3.41886 27.7473 7.14401 27.7473C8.10108 27.7493 9.03965 27.4826 9.85369 26.9774C10.6677 26.4721 11.3248 25.7485 11.7507 24.8881C12.1766 24.0278 12.3544 23.0651 12.2639 22.1087C12.1734 21.1523 11.8184 20.2403 11.2388 19.4758L14.1437 17.1277L14.2272 17.5497C14.2461 17.6446 14.2861 17.734 14.344 17.8113C14.402 17.8886 14.4765 17.9518 14.5621 17.9962L33.2039 27.675C33.3455 27.7487 33.5092 27.7669 33.6634 27.7262C33.8175 27.6854 33.9511 27.5887 34.0382 27.4546C34.1253 27.3206 34.1596 27.1588 34.1346 27.0008C34.1095 26.8427 34.0269 26.6997 33.9027 26.5994L18.1658 13.8744ZM3.28709 5.16215C3.28709 4.39644 3.51329 3.64792 3.93709 3.01125C4.3609 2.37458 4.96327 1.87836 5.66803 1.58533C6.37279 1.29231 7.14828 1.21564 7.89645 1.36502C8.64462 1.5144 9.33186 1.88313 9.87126 2.42457C10.4107 2.96601 10.778 3.65585 10.9268 4.40685C11.0756 5.15785 10.9993 5.93629 10.7073 6.64371C10.4154 7.35114 9.92106 7.95579 9.2868 8.3812C8.65253 8.80661 7.90683 9.03367 7.14401 9.03367C6.12145 9.03247 5.14112 8.6242 4.41807 7.89841C3.69501 7.17261 3.28828 6.18857 3.28709 5.16215ZM28.1256 4.16201L14.5544 15.1371L15.4274 10.7552L28.1256 4.16201ZM7.14401 26.4561C6.38118 26.4561 5.63548 26.2291 5.00122 25.8037C4.36695 25.3783 3.8726 24.7736 3.58068 24.0662C3.28876 23.3588 3.21238 22.5803 3.3612 21.8293C3.51002 21.0783 3.87735 20.3885 4.41675 19.847C4.95615 19.3056 5.64339 18.9369 6.39156 18.7875C7.13973 18.6381 7.91522 18.7148 8.61998 19.0078C9.32474 19.3008 9.92711 19.7971 10.3509 20.4337C10.7747 21.0704 11.0009 21.8189 11.0009 22.5846C10.9999 23.6111 10.5932 24.5952 9.87013 25.3211C9.14704 26.0469 8.16661 26.4551 7.14401 26.4561ZM15.4274 16.9916L15.2725 16.2173L17.1405 14.7061L28.1256 23.5848L15.4274 16.9916Z" fill="white"></path></svg></span>
            <h3>Haircut</h3>
            <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.</p>
            <span>$300</span>
          </Fade>
        </div>
        <div className={styles.service_item}>
          <Fade direction='up' triggerOnce={true}>
            <span className={styles.icon}><svg className="services-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2519 19.1628C38.916 15.4849 38.916 11.6017 35.2519 7.92636C35.1314 7.80535 34.9679 7.73734 34.7975 7.7373H29.6549C29.5217 7.73738 29.3918 7.77897 29.2832 7.85634C29.1746 7.93371 29.0926 8.04303 29.0486 8.1692C29.0045 8.29537 29.0006 8.43215 29.0374 8.56065C29.0742 8.68915 29.1498 8.80301 29.2538 8.8865C33.2078 12.0605 33.2161 15.0216 29.2538 18.2027C29.2351 18.2175 29.2173 18.2335 29.2004 18.2504C25.5364 21.9284 25.5364 25.8115 29.2004 29.4868C29.2173 29.5038 29.2351 29.5197 29.2538 29.5346C33.2078 32.7086 33.2161 35.6697 29.2538 38.8508C29.1499 38.9341 29.0744 39.0477 29.0376 39.176C29.0007 39.3042 29.0044 39.4408 29.0482 39.5668C29.0919 39.6929 29.1734 39.8022 29.2817 39.8798C29.3899 39.9574 29.5194 39.9993 29.6523 40H34.7949C34.9654 39.9999 35.1288 39.9319 35.2494 39.8109C38.9134 36.133 38.9134 32.2498 35.2494 28.5745C32.052 25.3637 32.052 22.3736 35.2519 19.1628Z" fill="#EB1616"></path><path d="M24.9624 19.1628C28.6265 15.4849 28.6265 11.6017 24.9624 7.92636C24.8419 7.80535 24.6784 7.73734 24.5079 7.7373H19.3654C19.2321 7.73724 19.1022 7.77874 18.9935 7.85606C18.8847 7.93338 18.8026 8.0427 18.7585 8.1689C18.7144 8.29509 18.7104 8.43194 18.7472 8.56049C18.7839 8.68905 18.8596 8.80297 18.9636 8.8865C22.9176 12.0605 22.9266 15.0216 18.9636 18.2027C18.9449 18.2175 18.9271 18.2335 18.9103 18.2504C15.2462 21.9284 15.2462 25.8115 18.9103 29.4868C18.9271 29.5038 18.9449 29.5197 18.9636 29.5346C22.9176 32.7086 22.9266 35.6697 18.9636 38.8508C18.8597 38.9342 18.7841 39.0479 18.7473 39.1763C18.7105 39.3047 18.7143 39.4413 18.7582 39.5674C18.8021 39.6936 18.8839 39.8029 18.9923 39.8804C19.1007 39.9578 19.2304 39.9996 19.3635 40H24.506C24.6765 39.9999 24.84 39.9319 24.9605 39.8109C28.6246 36.133 28.6246 32.2498 24.9605 28.5745C21.7631 25.3637 21.7631 22.3736 24.9624 19.1628Z" fill="#EB1616"></path><path d="M14.6734 7.92636C14.6137 7.86637 14.5427 7.81878 14.4646 7.78634C14.3865 7.7539 14.3028 7.73724 14.2183 7.7373H9.07254C8.9393 7.73724 8.80934 7.77874 8.70062 7.85606C8.5919 7.93338 8.50981 8.0427 8.46569 8.1689C8.42157 8.29509 8.4176 8.43194 8.45435 8.56049C8.49109 8.68905 8.56672 8.80297 8.67078 8.8865C12.6267 12.0579 12.6363 15.0235 8.67078 18.2027C8.65231 18.2175 8.63471 18.2335 8.61807 18.2504C6.78732 20.0887 5.85844 21.9787 5.85844 23.8686C5.85844 24.0398 5.92617 24.2039 6.04672 24.3249C6.16727 24.4459 6.33078 24.5139 6.50126 24.5139H11.6438C11.8143 24.5139 11.9778 24.4459 12.0984 24.3249C12.2189 24.2039 12.2866 24.0398 12.2866 23.8686C12.2866 22.3336 13.0889 20.7501 14.6709 19.1628C18.3362 15.4874 18.3362 11.6017 14.6734 7.92636Z" fill="#EB1616"></path><path d="M18.1658 13.8744L33.9027 1.14803C34.0269 1.04773 34.1095 0.904673 34.1346 0.746636C34.1596 0.588599 34.1253 0.426857 34.0382 0.292813C33.9511 0.158768 33.8175 0.0619845 33.6634 0.0212529C33.5092 -0.0194787 33.3455 -0.00125212 33.2039 0.0723938L14.5621 9.75119C14.4765 9.79565 14.402 9.85887 14.344 9.93616C14.2861 10.0134 14.2461 10.1028 14.2272 10.1977L14.1488 10.5945L11.2407 8.27162C12.0259 7.22383 12.3839 5.91511 12.2418 4.61176C12.0997 3.30841 11.4683 2.10836 10.476 1.25577C9.48368 0.403185 8.20504 -0.0378693 6.90023 0.0223498C5.59543 0.0825689 4.3625 0.639537 3.45231 1.57993C2.54212 2.52031 2.02306 3.77347 2.00075 5.0844C1.97844 6.39534 2.45454 7.66556 3.33219 8.63661C4.20985 9.60767 5.4231 10.2066 6.7251 10.3115C8.02709 10.4164 9.32 10.0195 10.3407 9.20143L13.8653 12.0193L12.9937 16.4005L10.3395 18.546C9.7865 18.1049 9.14888 17.783 8.46642 17.6005C7.78396 17.4179 7.07132 17.3785 6.37302 17.4848C5.67472 17.5911 5.00575 17.8408 4.40791 18.2183C3.81007 18.5958 3.29619 19.0929 2.89837 19.6787C2.50055 20.2645 2.22734 20.9264 2.0958 21.6229C1.96426 22.3195 1.97722 23.0358 2.13386 23.7271C2.29051 24.4184 2.58747 25.0699 3.00622 25.6408C3.42496 26.2117 3.95648 26.6898 4.56758 27.0453C3.77692 27.5137 3.12334 28.1832 2.6728 28.9862C2.22225 29.7892 1.99068 30.6973 2.00145 31.6188C2.00145 31.7899 2.06917 31.9541 2.18972 32.0751C2.31028 32.1961 2.47378 32.2641 2.64427 32.2641C2.81475 32.2641 2.97826 32.1961 3.09881 32.0751C3.21936 31.9541 3.28709 31.7899 3.28709 31.6188C3.28709 31.2226 3.41886 27.7473 7.14401 27.7473C8.10108 27.7493 9.03965 27.4826 9.85369 26.9774C10.6677 26.4721 11.3248 25.7485 11.7507 24.8881C12.1766 24.0278 12.3544 23.0651 12.2639 22.1087C12.1734 21.1523 11.8184 20.2403 11.2388 19.4758L14.1437 17.1277L14.2272 17.5497C14.2461 17.6446 14.2861 17.734 14.344 17.8113C14.402 17.8886 14.4765 17.9518 14.5621 17.9962L33.2039 27.675C33.3455 27.7487 33.5092 27.7669 33.6634 27.7262C33.8175 27.6854 33.9511 27.5887 34.0382 27.4546C34.1253 27.3206 34.1596 27.1588 34.1346 27.0008C34.1095 26.8427 34.0269 26.6997 33.9027 26.5994L18.1658 13.8744ZM3.28709 5.16215C3.28709 4.39644 3.51329 3.64792 3.93709 3.01125C4.3609 2.37458 4.96327 1.87836 5.66803 1.58533C6.37279 1.29231 7.14828 1.21564 7.89645 1.36502C8.64462 1.5144 9.33186 1.88313 9.87126 2.42457C10.4107 2.96601 10.778 3.65585 10.9268 4.40685C11.0756 5.15785 10.9993 5.93629 10.7073 6.64371C10.4154 7.35114 9.92106 7.95579 9.2868 8.3812C8.65253 8.80661 7.90683 9.03367 7.14401 9.03367C6.12145 9.03247 5.14112 8.6242 4.41807 7.89841C3.69501 7.17261 3.28828 6.18857 3.28709 5.16215ZM28.1256 4.16201L14.5544 15.1371L15.4274 10.7552L28.1256 4.16201ZM7.14401 26.4561C6.38118 26.4561 5.63548 26.2291 5.00122 25.8037C4.36695 25.3783 3.8726 24.7736 3.58068 24.0662C3.28876 23.3588 3.21238 22.5803 3.3612 21.8293C3.51002 21.0783 3.87735 20.3885 4.41675 19.847C4.95615 19.3056 5.64339 18.9369 6.39156 18.7875C7.13973 18.6381 7.91522 18.7148 8.61998 19.0078C9.32474 19.3008 9.92711 19.7971 10.3509 20.4337C10.7747 21.0704 11.0009 21.8189 11.0009 22.5846C10.9999 23.6111 10.5932 24.5952 9.87013 25.3211C9.14704 26.0469 8.16661 26.4551 7.14401 26.4561ZM15.4274 16.9916L15.2725 16.2173L17.1405 14.7061L28.1256 23.5848L15.4274 16.9916Z" fill="white"></path></svg></span>
            <h3>Haircut</h3>
            <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.</p>
            <span>$300</span>
          </Fade>
        </div>
        <div className={styles.service_item}>
          <Fade direction='up' triggerOnce={true}>
            <span className={styles.icon}><svg className="services-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2519 19.1628C38.916 15.4849 38.916 11.6017 35.2519 7.92636C35.1314 7.80535 34.9679 7.73734 34.7975 7.7373H29.6549C29.5217 7.73738 29.3918 7.77897 29.2832 7.85634C29.1746 7.93371 29.0926 8.04303 29.0486 8.1692C29.0045 8.29537 29.0006 8.43215 29.0374 8.56065C29.0742 8.68915 29.1498 8.80301 29.2538 8.8865C33.2078 12.0605 33.2161 15.0216 29.2538 18.2027C29.2351 18.2175 29.2173 18.2335 29.2004 18.2504C25.5364 21.9284 25.5364 25.8115 29.2004 29.4868C29.2173 29.5038 29.2351 29.5197 29.2538 29.5346C33.2078 32.7086 33.2161 35.6697 29.2538 38.8508C29.1499 38.9341 29.0744 39.0477 29.0376 39.176C29.0007 39.3042 29.0044 39.4408 29.0482 39.5668C29.0919 39.6929 29.1734 39.8022 29.2817 39.8798C29.3899 39.9574 29.5194 39.9993 29.6523 40H34.7949C34.9654 39.9999 35.1288 39.9319 35.2494 39.8109C38.9134 36.133 38.9134 32.2498 35.2494 28.5745C32.052 25.3637 32.052 22.3736 35.2519 19.1628Z" fill="#EB1616"></path><path d="M24.9624 19.1628C28.6265 15.4849 28.6265 11.6017 24.9624 7.92636C24.8419 7.80535 24.6784 7.73734 24.5079 7.7373H19.3654C19.2321 7.73724 19.1022 7.77874 18.9935 7.85606C18.8847 7.93338 18.8026 8.0427 18.7585 8.1689C18.7144 8.29509 18.7104 8.43194 18.7472 8.56049C18.7839 8.68905 18.8596 8.80297 18.9636 8.8865C22.9176 12.0605 22.9266 15.0216 18.9636 18.2027C18.9449 18.2175 18.9271 18.2335 18.9103 18.2504C15.2462 21.9284 15.2462 25.8115 18.9103 29.4868C18.9271 29.5038 18.9449 29.5197 18.9636 29.5346C22.9176 32.7086 22.9266 35.6697 18.9636 38.8508C18.8597 38.9342 18.7841 39.0479 18.7473 39.1763C18.7105 39.3047 18.7143 39.4413 18.7582 39.5674C18.8021 39.6936 18.8839 39.8029 18.9923 39.8804C19.1007 39.9578 19.2304 39.9996 19.3635 40H24.506C24.6765 39.9999 24.84 39.9319 24.9605 39.8109C28.6246 36.133 28.6246 32.2498 24.9605 28.5745C21.7631 25.3637 21.7631 22.3736 24.9624 19.1628Z" fill="#EB1616"></path><path d="M14.6734 7.92636C14.6137 7.86637 14.5427 7.81878 14.4646 7.78634C14.3865 7.7539 14.3028 7.73724 14.2183 7.7373H9.07254C8.9393 7.73724 8.80934 7.77874 8.70062 7.85606C8.5919 7.93338 8.50981 8.0427 8.46569 8.1689C8.42157 8.29509 8.4176 8.43194 8.45435 8.56049C8.49109 8.68905 8.56672 8.80297 8.67078 8.8865C12.6267 12.0579 12.6363 15.0235 8.67078 18.2027C8.65231 18.2175 8.63471 18.2335 8.61807 18.2504C6.78732 20.0887 5.85844 21.9787 5.85844 23.8686C5.85844 24.0398 5.92617 24.2039 6.04672 24.3249C6.16727 24.4459 6.33078 24.5139 6.50126 24.5139H11.6438C11.8143 24.5139 11.9778 24.4459 12.0984 24.3249C12.2189 24.2039 12.2866 24.0398 12.2866 23.8686C12.2866 22.3336 13.0889 20.7501 14.6709 19.1628C18.3362 15.4874 18.3362 11.6017 14.6734 7.92636Z" fill="#EB1616"></path><path d="M18.1658 13.8744L33.9027 1.14803C34.0269 1.04773 34.1095 0.904673 34.1346 0.746636C34.1596 0.588599 34.1253 0.426857 34.0382 0.292813C33.9511 0.158768 33.8175 0.0619845 33.6634 0.0212529C33.5092 -0.0194787 33.3455 -0.00125212 33.2039 0.0723938L14.5621 9.75119C14.4765 9.79565 14.402 9.85887 14.344 9.93616C14.2861 10.0134 14.2461 10.1028 14.2272 10.1977L14.1488 10.5945L11.2407 8.27162C12.0259 7.22383 12.3839 5.91511 12.2418 4.61176C12.0997 3.30841 11.4683 2.10836 10.476 1.25577C9.48368 0.403185 8.20504 -0.0378693 6.90023 0.0223498C5.59543 0.0825689 4.3625 0.639537 3.45231 1.57993C2.54212 2.52031 2.02306 3.77347 2.00075 5.0844C1.97844 6.39534 2.45454 7.66556 3.33219 8.63661C4.20985 9.60767 5.4231 10.2066 6.7251 10.3115C8.02709 10.4164 9.32 10.0195 10.3407 9.20143L13.8653 12.0193L12.9937 16.4005L10.3395 18.546C9.7865 18.1049 9.14888 17.783 8.46642 17.6005C7.78396 17.4179 7.07132 17.3785 6.37302 17.4848C5.67472 17.5911 5.00575 17.8408 4.40791 18.2183C3.81007 18.5958 3.29619 19.0929 2.89837 19.6787C2.50055 20.2645 2.22734 20.9264 2.0958 21.6229C1.96426 22.3195 1.97722 23.0358 2.13386 23.7271C2.29051 24.4184 2.58747 25.0699 3.00622 25.6408C3.42496 26.2117 3.95648 26.6898 4.56758 27.0453C3.77692 27.5137 3.12334 28.1832 2.6728 28.9862C2.22225 29.7892 1.99068 30.6973 2.00145 31.6188C2.00145 31.7899 2.06917 31.9541 2.18972 32.0751C2.31028 32.1961 2.47378 32.2641 2.64427 32.2641C2.81475 32.2641 2.97826 32.1961 3.09881 32.0751C3.21936 31.9541 3.28709 31.7899 3.28709 31.6188C3.28709 31.2226 3.41886 27.7473 7.14401 27.7473C8.10108 27.7493 9.03965 27.4826 9.85369 26.9774C10.6677 26.4721 11.3248 25.7485 11.7507 24.8881C12.1766 24.0278 12.3544 23.0651 12.2639 22.1087C12.1734 21.1523 11.8184 20.2403 11.2388 19.4758L14.1437 17.1277L14.2272 17.5497C14.2461 17.6446 14.2861 17.734 14.344 17.8113C14.402 17.8886 14.4765 17.9518 14.5621 17.9962L33.2039 27.675C33.3455 27.7487 33.5092 27.7669 33.6634 27.7262C33.8175 27.6854 33.9511 27.5887 34.0382 27.4546C34.1253 27.3206 34.1596 27.1588 34.1346 27.0008C34.1095 26.8427 34.0269 26.6997 33.9027 26.5994L18.1658 13.8744ZM3.28709 5.16215C3.28709 4.39644 3.51329 3.64792 3.93709 3.01125C4.3609 2.37458 4.96327 1.87836 5.66803 1.58533C6.37279 1.29231 7.14828 1.21564 7.89645 1.36502C8.64462 1.5144 9.33186 1.88313 9.87126 2.42457C10.4107 2.96601 10.778 3.65585 10.9268 4.40685C11.0756 5.15785 10.9993 5.93629 10.7073 6.64371C10.4154 7.35114 9.92106 7.95579 9.2868 8.3812C8.65253 8.80661 7.90683 9.03367 7.14401 9.03367C6.12145 9.03247 5.14112 8.6242 4.41807 7.89841C3.69501 7.17261 3.28828 6.18857 3.28709 5.16215ZM28.1256 4.16201L14.5544 15.1371L15.4274 10.7552L28.1256 4.16201ZM7.14401 26.4561C6.38118 26.4561 5.63548 26.2291 5.00122 25.8037C4.36695 25.3783 3.8726 24.7736 3.58068 24.0662C3.28876 23.3588 3.21238 22.5803 3.3612 21.8293C3.51002 21.0783 3.87735 20.3885 4.41675 19.847C4.95615 19.3056 5.64339 18.9369 6.39156 18.7875C7.13973 18.6381 7.91522 18.7148 8.61998 19.0078C9.32474 19.3008 9.92711 19.7971 10.3509 20.4337C10.7747 21.0704 11.0009 21.8189 11.0009 22.5846C10.9999 23.6111 10.5932 24.5952 9.87013 25.3211C9.14704 26.0469 8.16661 26.4551 7.14401 26.4561ZM15.4274 16.9916L15.2725 16.2173L17.1405 14.7061L28.1256 23.5848L15.4274 16.9916Z" fill="white"></path></svg></span>
            <h3>Haircut</h3>
            <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.</p>
            <span>$300</span>
          </Fade>
        </div>
        <div className={styles.service_item}>
          <Fade direction='up' triggerOnce={true}>
            <span className={styles.icon}><svg className="services-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2519 19.1628C38.916 15.4849 38.916 11.6017 35.2519 7.92636C35.1314 7.80535 34.9679 7.73734 34.7975 7.7373H29.6549C29.5217 7.73738 29.3918 7.77897 29.2832 7.85634C29.1746 7.93371 29.0926 8.04303 29.0486 8.1692C29.0045 8.29537 29.0006 8.43215 29.0374 8.56065C29.0742 8.68915 29.1498 8.80301 29.2538 8.8865C33.2078 12.0605 33.2161 15.0216 29.2538 18.2027C29.2351 18.2175 29.2173 18.2335 29.2004 18.2504C25.5364 21.9284 25.5364 25.8115 29.2004 29.4868C29.2173 29.5038 29.2351 29.5197 29.2538 29.5346C33.2078 32.7086 33.2161 35.6697 29.2538 38.8508C29.1499 38.9341 29.0744 39.0477 29.0376 39.176C29.0007 39.3042 29.0044 39.4408 29.0482 39.5668C29.0919 39.6929 29.1734 39.8022 29.2817 39.8798C29.3899 39.9574 29.5194 39.9993 29.6523 40H34.7949C34.9654 39.9999 35.1288 39.9319 35.2494 39.8109C38.9134 36.133 38.9134 32.2498 35.2494 28.5745C32.052 25.3637 32.052 22.3736 35.2519 19.1628Z" fill="#EB1616"></path><path d="M24.9624 19.1628C28.6265 15.4849 28.6265 11.6017 24.9624 7.92636C24.8419 7.80535 24.6784 7.73734 24.5079 7.7373H19.3654C19.2321 7.73724 19.1022 7.77874 18.9935 7.85606C18.8847 7.93338 18.8026 8.0427 18.7585 8.1689C18.7144 8.29509 18.7104 8.43194 18.7472 8.56049C18.7839 8.68905 18.8596 8.80297 18.9636 8.8865C22.9176 12.0605 22.9266 15.0216 18.9636 18.2027C18.9449 18.2175 18.9271 18.2335 18.9103 18.2504C15.2462 21.9284 15.2462 25.8115 18.9103 29.4868C18.9271 29.5038 18.9449 29.5197 18.9636 29.5346C22.9176 32.7086 22.9266 35.6697 18.9636 38.8508C18.8597 38.9342 18.7841 39.0479 18.7473 39.1763C18.7105 39.3047 18.7143 39.4413 18.7582 39.5674C18.8021 39.6936 18.8839 39.8029 18.9923 39.8804C19.1007 39.9578 19.2304 39.9996 19.3635 40H24.506C24.6765 39.9999 24.84 39.9319 24.9605 39.8109C28.6246 36.133 28.6246 32.2498 24.9605 28.5745C21.7631 25.3637 21.7631 22.3736 24.9624 19.1628Z" fill="#EB1616"></path><path d="M14.6734 7.92636C14.6137 7.86637 14.5427 7.81878 14.4646 7.78634C14.3865 7.7539 14.3028 7.73724 14.2183 7.7373H9.07254C8.9393 7.73724 8.80934 7.77874 8.70062 7.85606C8.5919 7.93338 8.50981 8.0427 8.46569 8.1689C8.42157 8.29509 8.4176 8.43194 8.45435 8.56049C8.49109 8.68905 8.56672 8.80297 8.67078 8.8865C12.6267 12.0579 12.6363 15.0235 8.67078 18.2027C8.65231 18.2175 8.63471 18.2335 8.61807 18.2504C6.78732 20.0887 5.85844 21.9787 5.85844 23.8686C5.85844 24.0398 5.92617 24.2039 6.04672 24.3249C6.16727 24.4459 6.33078 24.5139 6.50126 24.5139H11.6438C11.8143 24.5139 11.9778 24.4459 12.0984 24.3249C12.2189 24.2039 12.2866 24.0398 12.2866 23.8686C12.2866 22.3336 13.0889 20.7501 14.6709 19.1628C18.3362 15.4874 18.3362 11.6017 14.6734 7.92636Z" fill="#EB1616"></path><path d="M18.1658 13.8744L33.9027 1.14803C34.0269 1.04773 34.1095 0.904673 34.1346 0.746636C34.1596 0.588599 34.1253 0.426857 34.0382 0.292813C33.9511 0.158768 33.8175 0.0619845 33.6634 0.0212529C33.5092 -0.0194787 33.3455 -0.00125212 33.2039 0.0723938L14.5621 9.75119C14.4765 9.79565 14.402 9.85887 14.344 9.93616C14.2861 10.0134 14.2461 10.1028 14.2272 10.1977L14.1488 10.5945L11.2407 8.27162C12.0259 7.22383 12.3839 5.91511 12.2418 4.61176C12.0997 3.30841 11.4683 2.10836 10.476 1.25577C9.48368 0.403185 8.20504 -0.0378693 6.90023 0.0223498C5.59543 0.0825689 4.3625 0.639537 3.45231 1.57993C2.54212 2.52031 2.02306 3.77347 2.00075 5.0844C1.97844 6.39534 2.45454 7.66556 3.33219 8.63661C4.20985 9.60767 5.4231 10.2066 6.7251 10.3115C8.02709 10.4164 9.32 10.0195 10.3407 9.20143L13.8653 12.0193L12.9937 16.4005L10.3395 18.546C9.7865 18.1049 9.14888 17.783 8.46642 17.6005C7.78396 17.4179 7.07132 17.3785 6.37302 17.4848C5.67472 17.5911 5.00575 17.8408 4.40791 18.2183C3.81007 18.5958 3.29619 19.0929 2.89837 19.6787C2.50055 20.2645 2.22734 20.9264 2.0958 21.6229C1.96426 22.3195 1.97722 23.0358 2.13386 23.7271C2.29051 24.4184 2.58747 25.0699 3.00622 25.6408C3.42496 26.2117 3.95648 26.6898 4.56758 27.0453C3.77692 27.5137 3.12334 28.1832 2.6728 28.9862C2.22225 29.7892 1.99068 30.6973 2.00145 31.6188C2.00145 31.7899 2.06917 31.9541 2.18972 32.0751C2.31028 32.1961 2.47378 32.2641 2.64427 32.2641C2.81475 32.2641 2.97826 32.1961 3.09881 32.0751C3.21936 31.9541 3.28709 31.7899 3.28709 31.6188C3.28709 31.2226 3.41886 27.7473 7.14401 27.7473C8.10108 27.7493 9.03965 27.4826 9.85369 26.9774C10.6677 26.4721 11.3248 25.7485 11.7507 24.8881C12.1766 24.0278 12.3544 23.0651 12.2639 22.1087C12.1734 21.1523 11.8184 20.2403 11.2388 19.4758L14.1437 17.1277L14.2272 17.5497C14.2461 17.6446 14.2861 17.734 14.344 17.8113C14.402 17.8886 14.4765 17.9518 14.5621 17.9962L33.2039 27.675C33.3455 27.7487 33.5092 27.7669 33.6634 27.7262C33.8175 27.6854 33.9511 27.5887 34.0382 27.4546C34.1253 27.3206 34.1596 27.1588 34.1346 27.0008C34.1095 26.8427 34.0269 26.6997 33.9027 26.5994L18.1658 13.8744ZM3.28709 5.16215C3.28709 4.39644 3.51329 3.64792 3.93709 3.01125C4.3609 2.37458 4.96327 1.87836 5.66803 1.58533C6.37279 1.29231 7.14828 1.21564 7.89645 1.36502C8.64462 1.5144 9.33186 1.88313 9.87126 2.42457C10.4107 2.96601 10.778 3.65585 10.9268 4.40685C11.0756 5.15785 10.9993 5.93629 10.7073 6.64371C10.4154 7.35114 9.92106 7.95579 9.2868 8.3812C8.65253 8.80661 7.90683 9.03367 7.14401 9.03367C6.12145 9.03247 5.14112 8.6242 4.41807 7.89841C3.69501 7.17261 3.28828 6.18857 3.28709 5.16215ZM28.1256 4.16201L14.5544 15.1371L15.4274 10.7552L28.1256 4.16201ZM7.14401 26.4561C6.38118 26.4561 5.63548 26.2291 5.00122 25.8037C4.36695 25.3783 3.8726 24.7736 3.58068 24.0662C3.28876 23.3588 3.21238 22.5803 3.3612 21.8293C3.51002 21.0783 3.87735 20.3885 4.41675 19.847C4.95615 19.3056 5.64339 18.9369 6.39156 18.7875C7.13973 18.6381 7.91522 18.7148 8.61998 19.0078C9.32474 19.3008 9.92711 19.7971 10.3509 20.4337C10.7747 21.0704 11.0009 21.8189 11.0009 22.5846C10.9999 23.6111 10.5932 24.5952 9.87013 25.3211C9.14704 26.0469 8.16661 26.4551 7.14401 26.4561ZM15.4274 16.9916L15.2725 16.2173L17.1405 14.7061L28.1256 23.5848L15.4274 16.9916Z" fill="white"></path></svg></span>
            <h3>Haircut</h3>
            <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.</p>
            <span>$300</span>
          </Fade>
        </div>
        <div className={styles.service_item}>
          <Fade direction='up' triggerOnce={true}>
            <span className={styles.icon}><svg className="services-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2519 19.1628C38.916 15.4849 38.916 11.6017 35.2519 7.92636C35.1314 7.80535 34.9679 7.73734 34.7975 7.7373H29.6549C29.5217 7.73738 29.3918 7.77897 29.2832 7.85634C29.1746 7.93371 29.0926 8.04303 29.0486 8.1692C29.0045 8.29537 29.0006 8.43215 29.0374 8.56065C29.0742 8.68915 29.1498 8.80301 29.2538 8.8865C33.2078 12.0605 33.2161 15.0216 29.2538 18.2027C29.2351 18.2175 29.2173 18.2335 29.2004 18.2504C25.5364 21.9284 25.5364 25.8115 29.2004 29.4868C29.2173 29.5038 29.2351 29.5197 29.2538 29.5346C33.2078 32.7086 33.2161 35.6697 29.2538 38.8508C29.1499 38.9341 29.0744 39.0477 29.0376 39.176C29.0007 39.3042 29.0044 39.4408 29.0482 39.5668C29.0919 39.6929 29.1734 39.8022 29.2817 39.8798C29.3899 39.9574 29.5194 39.9993 29.6523 40H34.7949C34.9654 39.9999 35.1288 39.9319 35.2494 39.8109C38.9134 36.133 38.9134 32.2498 35.2494 28.5745C32.052 25.3637 32.052 22.3736 35.2519 19.1628Z" fill="#EB1616"></path><path d="M24.9624 19.1628C28.6265 15.4849 28.6265 11.6017 24.9624 7.92636C24.8419 7.80535 24.6784 7.73734 24.5079 7.7373H19.3654C19.2321 7.73724 19.1022 7.77874 18.9935 7.85606C18.8847 7.93338 18.8026 8.0427 18.7585 8.1689C18.7144 8.29509 18.7104 8.43194 18.7472 8.56049C18.7839 8.68905 18.8596 8.80297 18.9636 8.8865C22.9176 12.0605 22.9266 15.0216 18.9636 18.2027C18.9449 18.2175 18.9271 18.2335 18.9103 18.2504C15.2462 21.9284 15.2462 25.8115 18.9103 29.4868C18.9271 29.5038 18.9449 29.5197 18.9636 29.5346C22.9176 32.7086 22.9266 35.6697 18.9636 38.8508C18.8597 38.9342 18.7841 39.0479 18.7473 39.1763C18.7105 39.3047 18.7143 39.4413 18.7582 39.5674C18.8021 39.6936 18.8839 39.8029 18.9923 39.8804C19.1007 39.9578 19.2304 39.9996 19.3635 40H24.506C24.6765 39.9999 24.84 39.9319 24.9605 39.8109C28.6246 36.133 28.6246 32.2498 24.9605 28.5745C21.7631 25.3637 21.7631 22.3736 24.9624 19.1628Z" fill="#EB1616"></path><path d="M14.6734 7.92636C14.6137 7.86637 14.5427 7.81878 14.4646 7.78634C14.3865 7.7539 14.3028 7.73724 14.2183 7.7373H9.07254C8.9393 7.73724 8.80934 7.77874 8.70062 7.85606C8.5919 7.93338 8.50981 8.0427 8.46569 8.1689C8.42157 8.29509 8.4176 8.43194 8.45435 8.56049C8.49109 8.68905 8.56672 8.80297 8.67078 8.8865C12.6267 12.0579 12.6363 15.0235 8.67078 18.2027C8.65231 18.2175 8.63471 18.2335 8.61807 18.2504C6.78732 20.0887 5.85844 21.9787 5.85844 23.8686C5.85844 24.0398 5.92617 24.2039 6.04672 24.3249C6.16727 24.4459 6.33078 24.5139 6.50126 24.5139H11.6438C11.8143 24.5139 11.9778 24.4459 12.0984 24.3249C12.2189 24.2039 12.2866 24.0398 12.2866 23.8686C12.2866 22.3336 13.0889 20.7501 14.6709 19.1628C18.3362 15.4874 18.3362 11.6017 14.6734 7.92636Z" fill="#EB1616"></path><path d="M18.1658 13.8744L33.9027 1.14803C34.0269 1.04773 34.1095 0.904673 34.1346 0.746636C34.1596 0.588599 34.1253 0.426857 34.0382 0.292813C33.9511 0.158768 33.8175 0.0619845 33.6634 0.0212529C33.5092 -0.0194787 33.3455 -0.00125212 33.2039 0.0723938L14.5621 9.75119C14.4765 9.79565 14.402 9.85887 14.344 9.93616C14.2861 10.0134 14.2461 10.1028 14.2272 10.1977L14.1488 10.5945L11.2407 8.27162C12.0259 7.22383 12.3839 5.91511 12.2418 4.61176C12.0997 3.30841 11.4683 2.10836 10.476 1.25577C9.48368 0.403185 8.20504 -0.0378693 6.90023 0.0223498C5.59543 0.0825689 4.3625 0.639537 3.45231 1.57993C2.54212 2.52031 2.02306 3.77347 2.00075 5.0844C1.97844 6.39534 2.45454 7.66556 3.33219 8.63661C4.20985 9.60767 5.4231 10.2066 6.7251 10.3115C8.02709 10.4164 9.32 10.0195 10.3407 9.20143L13.8653 12.0193L12.9937 16.4005L10.3395 18.546C9.7865 18.1049 9.14888 17.783 8.46642 17.6005C7.78396 17.4179 7.07132 17.3785 6.37302 17.4848C5.67472 17.5911 5.00575 17.8408 4.40791 18.2183C3.81007 18.5958 3.29619 19.0929 2.89837 19.6787C2.50055 20.2645 2.22734 20.9264 2.0958 21.6229C1.96426 22.3195 1.97722 23.0358 2.13386 23.7271C2.29051 24.4184 2.58747 25.0699 3.00622 25.6408C3.42496 26.2117 3.95648 26.6898 4.56758 27.0453C3.77692 27.5137 3.12334 28.1832 2.6728 28.9862C2.22225 29.7892 1.99068 30.6973 2.00145 31.6188C2.00145 31.7899 2.06917 31.9541 2.18972 32.0751C2.31028 32.1961 2.47378 32.2641 2.64427 32.2641C2.81475 32.2641 2.97826 32.1961 3.09881 32.0751C3.21936 31.9541 3.28709 31.7899 3.28709 31.6188C3.28709 31.2226 3.41886 27.7473 7.14401 27.7473C8.10108 27.7493 9.03965 27.4826 9.85369 26.9774C10.6677 26.4721 11.3248 25.7485 11.7507 24.8881C12.1766 24.0278 12.3544 23.0651 12.2639 22.1087C12.1734 21.1523 11.8184 20.2403 11.2388 19.4758L14.1437 17.1277L14.2272 17.5497C14.2461 17.6446 14.2861 17.734 14.344 17.8113C14.402 17.8886 14.4765 17.9518 14.5621 17.9962L33.2039 27.675C33.3455 27.7487 33.5092 27.7669 33.6634 27.7262C33.8175 27.6854 33.9511 27.5887 34.0382 27.4546C34.1253 27.3206 34.1596 27.1588 34.1346 27.0008C34.1095 26.8427 34.0269 26.6997 33.9027 26.5994L18.1658 13.8744ZM3.28709 5.16215C3.28709 4.39644 3.51329 3.64792 3.93709 3.01125C4.3609 2.37458 4.96327 1.87836 5.66803 1.58533C6.37279 1.29231 7.14828 1.21564 7.89645 1.36502C8.64462 1.5144 9.33186 1.88313 9.87126 2.42457C10.4107 2.96601 10.778 3.65585 10.9268 4.40685C11.0756 5.15785 10.9993 5.93629 10.7073 6.64371C10.4154 7.35114 9.92106 7.95579 9.2868 8.3812C8.65253 8.80661 7.90683 9.03367 7.14401 9.03367C6.12145 9.03247 5.14112 8.6242 4.41807 7.89841C3.69501 7.17261 3.28828 6.18857 3.28709 5.16215ZM28.1256 4.16201L14.5544 15.1371L15.4274 10.7552L28.1256 4.16201ZM7.14401 26.4561C6.38118 26.4561 5.63548 26.2291 5.00122 25.8037C4.36695 25.3783 3.8726 24.7736 3.58068 24.0662C3.28876 23.3588 3.21238 22.5803 3.3612 21.8293C3.51002 21.0783 3.87735 20.3885 4.41675 19.847C4.95615 19.3056 5.64339 18.9369 6.39156 18.7875C7.13973 18.6381 7.91522 18.7148 8.61998 19.0078C9.32474 19.3008 9.92711 19.7971 10.3509 20.4337C10.7747 21.0704 11.0009 21.8189 11.0009 22.5846C10.9999 23.6111 10.5932 24.5952 9.87013 25.3211C9.14704 26.0469 8.16661 26.4551 7.14401 26.4561ZM15.4274 16.9916L15.2725 16.2173L17.1405 14.7061L28.1256 23.5848L15.4274 16.9916Z" fill="white"></path></svg></span>
            <h3>Haircut</h3>
            <p>A dui aliquam ultrices eros lorem nibh vivamus. Quis aliquam duis pharetra faucibus ultrices volutpat quisque.</p>
            <span>$300</span>
          </Fade>
        </div>
      </div>
    </section>
  )
}