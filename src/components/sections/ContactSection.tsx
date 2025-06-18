import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="heading-2 mb-4">Contact Us</h2>
                    <p className="body-large text-gray-600 max-w-2xl mx-auto">
                        Ready to start your aviation career? Get in touch with us today.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="heading-3 mb-6">Get Information</h3>
                        <div className="space-y-4">
                            <div>
                                <strong>Phone:</strong> +82-2-XXXX-XXXX
                            </div>
                            <div>
                                <strong>Email:</strong> info@asea.ac.kr
                            </div>
                            <div>
                                <strong>Address:</strong> Seoul, South Korea
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="heading-3 mb-6">Quick Contact</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;