import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <div>
        <section>
            <form className=" text-white d-flex flex-column align-items-center gap-4">
                <div className="form-group">
                    <label htmlFor="mail">Email</label>
                    <input
                        type="text"
                        id="mail"
                    />
                </div>
                <div className="form-group">
                    <label  htmlFor="name" >Name</label>
                    <input
                        type="text"
                        id="name"
                    />
                </div>
            </form>
        </section>
    </div>
  )
}

export default Contact;