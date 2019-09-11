<template>
  <Layout>

    <!-- Header ============================================================ -->

    <header>
      <div class="container">
        <div class="row">
        <div class="three columns">
           <div class="logo">
              <g-link to="/"><g-image class="headlogo" src="~/assets/images/ospo_logo.png" /></g-link>
           </div>
        </div>
        <div class="nine columns">
          <nav>
             <ul>
               <li>
                 <g-link to="/">Sing In</g-link>
               </li>
               <li>
                 <g-link to="/tutorial">Tutorial</g-link>
               </li>
             </ul>
           </nav>
         </div>
       </div>
     </div>
     <div class="container">
         <div class="seven columns">
         <h1>{{ $static.metaData.siteName }}</h1>
        <p>Внедрение открытых IТ решений <strong>дома и в офисе</strong>. Помогаем отечественым организациям и бизнесу переходить на свободный софт.</p>
        <input type="email" placeholder="Enter your e-mail address"/>
        <button type="submit">Sign Up Now</button>
      </div>
    </div>
    </header>

    <main role="main">

    <!--Benefits =========================================================== -->

      <section class="benefits">
        <h2>Что такое ОСПО?</h2>
        <p>Our web application allows you to create documents with real-time editing and collaborating capabilities, while storing content and information to share with others.</p>
        <g-image src="~/assets/images/app.png" alt="Jottly's Web Application" />
      </section>

    <!-- Pricing   ========================================= -->
      <section class="pricing">
        <h2>How much will it cost me?</h2>
        <p>It’s rather inexpensive to use Jott.ly’s suite of tools compared to several other services out there. We have several options to fit your budget and needs:</p>
        <div class="pricebox">
          <h3>Individuals &amp; Family</h3>
          <h4>$2</h4>
          <p>per month/per user</p>
          <ul>
            <li>Unlimited notes</li>
            <li>Unlimited members</li>
            <li><strong>2GB</strong> of storage</li>
          </ul>
          <button>Select this plan</button>
        </div>
        <div class="pricebox">
           <h3>Small Businesses</h3>
           <h4>$5</h4>
           <p>per month/per user</p>
           <ul>
             <li>Unlimited notes</li>
             <li>Unlimited members</li>
             <li><strong>15GB</strong> of storage</li>
             <li>Real-time collaboration</li>
           </ul>
           <button>Select this plan</button>
        </div>
        <div class="pricebox">
           <h3>Enterprise</h3>
           <h4>$8</h4>
           <p>per month/per user</p>
           <ul>
             <li>Unlimited notes</li>
             <li>Unlimited members</li>
             <li><strong>Unlimited</strong> storage</li>
             <li>Real-time collaboration</li>
           </ul>
           <button>Select this plan</button>
        </div>
      </section>

      <!-- Testimonials  ================================================== -->
      <section class="testimonials">
        <h2>Who's using it?</h2>
        <p>Jott.ly has around 150,000 satisfied customers sharing and collaborating with teams throughout 35 countries. Here’s what a few had to say:</p>

        <blockquote>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
        </blockquote>
        <div class="avatar">
          <g-image src="~/assets/images/avatar1.jpg" />
          <p>Danny S.</p>
        </div>
        <blockquote>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
        </blockquote>
        <div class="avatar">
          <g-image src="~/assets/images/avatar2.jpg" alt="Jonathan M."  />
          <p>Jonathan M.</p>
        </div>

        <blockquote>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
        </blockquote>
        <div class="avatar">
          <g-image src="~/assets/images/avatar3.jpg" alt="Chloe P."  />
          <p>Chloe P.</p>
        </div>
      </section>
      <!-- Call to Action ================================================== -->
      <section class="action">
        <h2>Give it a try before you commit.</h2>
        <p>You can test drive Jott.ly before deciding on one of our plans. Just give us your email address, and we'll send you the details:</p>

        <input type="email" placeholder="Enter your e-mail address"/>
        <button type="submit">Sign Up Now!</button>
      </section>
    </main>

    <!-- Footer ========================================================== -->
    <footer>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms</a></li>
        </ul>
      </nav>
      <g-image src="~/assets/images/small_logo.png" />
      <p>&copy; 2019. Jott.ly. All Rights Reserved.</p>
    </footer>


  </Layout>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query

<script>
export default {
  metaInfo: {
    title: 'Главная Страница'
  }
}
</script>

<style scoped>
 @import url('../assets/css/custom.css');
</style>
