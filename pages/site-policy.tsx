import React from 'react';

class PrivacyPolicy extends React.Component<{}> {
    static async getInitialProps() {
        return { namespacesRequired: [] };
    }

    render() {
        return (
            <main className='container'>
                <h1>Welcome to our Privacy Policy</h1>
                <h3>Your privacy is critically important to us.</h3>
                FirstRussian is located at:<br />
                <address>
                    FirstRussian<br />1913 W 7th St Brooklyn <br />11223 - NY , United States
                </address>

                <p>
                    It is FirstRussian's policy to respect your privacy regarding any information we may collect while
                    operating our website. This Privacy Policy applies to
                    <a href='https://firstrussian.miki725.com/'>
                        https://firstrussian.miki725.com/
                    </a>
                    (hereinafter, "us", "we", or "https://firstrussian.miki725.com/"). We respect your privacy
                    and are committed to protecting personally identifiable information you may provide us through
                    the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information
                    may be collected on our Website, how we use this information, and under what circumstances we
                    may disclose the information to third parties. This Privacy Policy applies only to information
                    we collect through the Website and does not apply to our collection of information from other
                    sources.
                </p>
                <p>
                    This Privacy Policy, together with the Terms and conditions posted on our Website, set forth
                    the general rules and policies governing your use of our Website. Depending on your activities
                    when visiting our Website, you may be required to agree to additional terms and conditions.
                </p>

                <h2>Website Visitors</h2>
                <p>
                    Like most website operators, FirstRussian collects non-personally-identifying information of the
                    sort that web browsers and servers typically make available, such as the browser type, language
                    preference, referring site, and the date and time of each visitor request. FirstRussian's purpose
                    in collecting non-personally identifying information is to better understand how FirstRussian's
                    visitors use its website. From time to time, FirstRussian may release non-personally-identifying
                    information in the aggregate, e.g., by publishing a report on trends in the usage of its website.
                </p>

                <h2>Gathering of Personally-Identifying Information</h2>
                <p>
                    Certain visitors to FirstRussian's websites choose to interact with FirstRussian in ways that
                    require FirstRussian to gather personally-identifying information. The amount and type of
                    information that FirstRussian gathers depends on the nature of the interaction. For example,
                    if you sumbmit a Contact us form at https://firstrussian.miki725.com/ we ask to provide a
                    a name and email address.
                </p>

                <h2>Security</h2>
                <p>
                    The security of your Personal Information is important to us, but remember that no method of
                    transmission over the Internet, or method of electronic storage is 100% secure. While we strive
                    to use commercially acceptable means to protect your Personal Information, we cannot guarantee
                    its absolute security.
                </p>

                <h2>Links To External Sites</h2>
                <p>
                    Our Service may contain links to external sites that are not operated by us. If you click on a
                    third party link, you will be directed to that third party's site. We strongly advise you to
                    review the Privacy Policy and terms and conditions of every site you visit.
                </p>
                <p>
                    We have no control over, and assume no responsibility for the content, privacy policies or practices
                    of any third party sites, products or services.
                </p>

                <h2>Cookies</h2>
                <p>
                    To enrich and perfect your online experience, FirstRussian uses "Cookies", similar technologies and
                    services provided by others to display personalized content, appropriate advertising and store your
                    preferences on your computer.</p>
                <p>
                    A cookie is a string of information that a website stores on a visitor's computer, and that the
                    visitor's browser provides to the website each time the visitor returns. FirstRussian uses cookies
                    to help FirstRussian identify and track visitors, their usage of https://firstrussian.miki725.com/,
                    and their website access preferences. FirstRussian visitors who do not wish to have cookies placed
                    on their computers should set their browsers to refuse cookies before using FirstRussian's websites,
                    with the drawback that certain features of FirstRussian's websites may not function properly without
                    the aid of cookies.</p>
                <p>
                    By continuing to navigate our website without changing your cookie settings, you hereby acknowledge
                    and agree to FirstRussian's use of cookies.
                </p>

                <h2>Privacy Policy Changes</h2>
                <p>
                    Although most changes are likely to be minor, FirstRussian may change its Privacy Policy from time
                    to time, and in FirstRussian's sole discretion. FirstRussian encourages visitors to frequently
                    check this page for any changes to its Privacy Policy. Your continued use of this site after any
                    change in this Privacy Policy will constitute your acceptance of such change.
                </p>

                <h2>Credit & Contact Information</h2>
                <p>
                    This privacy policy was created at
                    <a
                        style={{ color:'inherit', textDecoration:'none' }}
                        href='https://termsandconditionstemplate.com/privacy-policy-generator/'
                        title='Privacy policy template generator'
                        target='_blank'
                    >
                        termsandconditionstemplate.com
                    </a>.
                    If you have any questions about this Privacy Policy, please contact us via&nbsp;
                    <a href='mailto:firstrussiansdachurch@gmail.com'>email</a>
                </p>

            </main>
        );
    }
}

export default PrivacyPolicy;
