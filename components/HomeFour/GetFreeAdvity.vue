<template>
    <section class="quote-area ptb-50" style="background-color: #fff5ee;">
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
<!-- 
                            <div class="form-group">
                                <select>
                                    <option value="">Company</option>
                                    <option value="">Ellison Estate</option>
                                    <option value="">Four Fairfield Pond</option>
                                    <option value="">Les Palais Bulles</option>
                                    <option value="">Villa Les Cèdres</option>
                                    <option value="">Villa Leopolda</option>
                                    <option value="">Buckingham Palace</option>
                                </select>	
                            </div> -->

                            <div class="form-group">
                                <textarea name="message" class="form-control" placeholder="Message"></textarea>
                            </div>
                                
                            <div class="quote-btn">
                                <button type="submit" class="default-btn">
                                    <b>Send Message</b>
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

        <div class="quote-shape">
            <div class="shape-1">
                <img src="../../assets/images/quote/quote-shape-1.png" alt="image">
            </div>
            <div class="shape-2">
                <img src="../../assets/images/quote/quote-shape-2.png" alt="image">
            </div>
        </div>
    </section>
</template>
<script>
    export default {
      name: 'GetFreeAdvity',
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

