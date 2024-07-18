<template>
    <div class="contact-info-area ptb-50">
        <div class="container ptb-50">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="contact-info-box">
                        <div class="icon">
                            <i class="flaticon-email-1" style="color:#f24a25;"></i>
                        </div>

                        <h3>E-MAIL US</h3>
                        <p><a href="mailto:info@nairiti.com">info@nairiti.com</a></p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="contact-info-box">
                        <div class="icon">
                            <i class="flaticon-pin" style="color:#f24a25;"></i>
                        </div>

                        <h3>VISIT OUR OFFICE</h3>
                        <p><a href="#">123 Business Road, City, Country</a></p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="contact-info-box">
                        <div class="icon">
                            <i class="flaticon-call" style="color:#f24a25;"></i>
                        </div>

                        <h3>LET'S TALK</h3>
                        <p><a href="tel:(123) 456-7890">(123) 456-7890</a></p>
                    </div>
                </div>
            </div>
        </div>


    <div class="ptb-50" style="background-color: #fff5ee;">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="quote-form">
                        <div class="content">
                            <h3>Let's Get Started</h3>
                        </div>
                        <form method="post" action="" ref="formName" name="formName" id="contactform">
                            <div class="form-group">
                                <input type="text" class="form-control" id="Name" placeholder="Name" name="name">
                            </div>
    
                            <div class="form-group">
                                <input type="email" class="form-control" id="Email" placeholder="Email" name="email">
                            </div>
    
                            <div class="form-group">
                                <input type="phone" class="form-control" id="Phone" placeholder="Phone" name="number">
                            </div>
                            <div class="form-group">
                                <textarea name="message" class="form-control" placeholder="Message"></textarea>
                            </div>
                                
                            <div class="quote-btn">
                                <button type="submit" class="default-btn">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div class="col-lg-6">
                    <div class="quote-image">
                        <img src="../../assets/images/quote/Home-img-1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>


<script>
    export default {
      name: 'ContactContent',
      mounted() {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyS2GANqQiCEJAFmXlw9xSiVvfTTL_b3MkaXUr161137axL-SKkycMLRy2y0Z0ZZYQw/exec'; // Add your script URL here
        const form = this.$refs.formName;
    
        form.addEventListener('submit', e => {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(() => alert("Thank you! Your form is submitted successfully."))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message));
        });
      }
    }
    </script>