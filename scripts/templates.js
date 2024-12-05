export function successTemplate(enteredEmail) {
    return `
        <section class="success_wrapper">
         <img src="./assets/images/icon-success.svg" width="64" height="64" />
         <h1 class="container-header">
           Thanks for subscribing!
         </h1>
         <p class="confirmation_msg">
            A confirmation email has been sent to <strong>${enteredEmail}</strong>.
            Please open it and click the button inside to confirm your subscription
         </p>
         <button class="dismiss" type="submit">Dismiss message</button>
        </section>
    `
}


export function subscribeTemplate() {
    return `
    <div class="wrapper">
     <img class="mobile" src="./assets/images/illustration-sign-up-mobile.svg" />
     <img class="desktop" src="./assets/images/illustration-sign-up-desktop.svg" />
     <div class="container">
      <h1 class="container-header">Stay updated!</h1>
      <p class="subtitle">Join 60,000+ product managers receiving monthly updates on:</p>
      <ul class="features-list">
        <li>
          <img src="./assets/images/icon-success.svg" width="21" height="21" />
          <p>
            Product discovery and building what matters
          </p>
        </li>
        <li>
          <img src="./assets/images/icon-success.svg" width="21" height="21" />
          <p>
            Measuring to ensure updates are a success
          </p>
        </li>
        <li>
          <img src="./assets/images/icon-success.svg" width="21" height="21" />
          <p>
            And much more!
          </p>
        </li>
      </ul>
      <form class="form js-form" id="newsletter-form">
        <div class="label_error_wrapper">
          <label class="form-label" for="email">Email address</label>
          <p class="error_msg">Valid email required</p>
        </div>
        <input class="js-email-input" type="text" id="email" placeholder="email@company.com" required />
        <button class="subscribe" type="submit">Subscribe to monthly newsletter</button>
      </form>
     </div> 
    </div>   
    `
}