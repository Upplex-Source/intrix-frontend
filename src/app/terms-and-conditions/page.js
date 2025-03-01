"use client";
import { useState } from "react";

function Page() {
    const [openIndex, setOpenIndex] = useState(null);

    const tnc = [
        {
            question: "Agreement to Terms",
            answer: `
            <div class="mb-4">These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and INTRIX LIFESTYLE SDN BHD, doing business as INTRIX (“INTRIX“, “we”, “us”, or “our”), concerning your access to and use of the <a href="https://www.intrixlifestyle.com.my" target="_blank">https://www.intrixlifestyle.com.my</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</div>
            <div class="mb-4">Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</div>
            <div class="mb-4">The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</div>
            <div class="">All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Site. If you are a minor, you must have your parent or guardian read and agree to these Terms of Use prior to you using the Site.</div>
            
            `,
        },
        {
            question: "Intellectual Property Rights",
            answer: `
              <div class="mb-4">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</div>
              <div>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</div>
            `,
        },
        {
            question: "User Representations",
            answer: `
              <div class="mb-4">By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorised purpose; and (5) your use of the Site will not violate any applicable law or regulation.</div>
              <div>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</div>
            `,
        },
        {
            question: "Products",
            answer: `
              <div>We make every effort to display as accurately as possible the colours, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colours, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colours and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.</div>
            `,
        },
        {
            question: "Purchases and Payment",
            answer: `
              <div class="mb-4">We accept the following forms of payment:</div>
              <div class="mb-4"><ul><li>Visa</li><li>Mastercard</li></ul></div>
              <div class="mb-4">You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in MYR.</div>
              <div class="mb-4">You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</div>
              <div>We reserve the right to refuse any order placed through the Site. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.</div>
            `,
        },
        {
            question: "Return Policy",
            answer: `
              <div class="mb-4">Please review our Return Policy posted on the Site prior to making any purchases.</div>
              <div></div>
            `,
        },
        {
            question: "Prohibited Activities",
            answer: `
              <div>
                <ul class="list-outside list-disc">
                    <li class="mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.</li>
                    <li class="mb-4">As a user of the Site, you agree not to:</li>
                    <li class="mb-4">Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                    <li class="mb-4">Make any unauthorised use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                    <li class="mb-4">Use a buying agent or purchasing agent to make purchases on the Site.</li>
                    <li class="mb-4">Use the Site to advertise or offer to sell goods and services.</li>
                    <li class="mb-4">Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                    <li class="mb-4">Engage in unauthorised framing of or linking to the Site.</li>
                    <li class="mb-4">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                    <li class="mb-4">Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                    <li class="mb-4">Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                    <li class="mb-4">Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                    <li class="mb-4">Attempt to impersonate another user or person or use the username of another user.</li>
                    <li class="mb-4">Sell or otherwise transfer your profile.</li>
                    <li class="mb-4">Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                    <li class="mb-4">Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
                    <li class="mb-4">Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
                    <li class="mb-4">Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
                    <li class="mb-4">Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
                    <li class="mb-4">Delete the copyright or other proprietary rights notice from any Content.</li>
                    <li class="mb-4">Copy or adapt the Site&apos;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                    <li class="mb-4">Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
                    <li class="mb-4">Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</li>
                    <li class="mb-4">Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorised script or other software.</li>
                    <li class="mb-4">Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                    <li class="mb-4">Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
                </ul>
              </div>
            `,
        },
        {
            question: "User Generated Contributions",
            answer: `
              <div>
                <ul class="list-outside list-decimal">
                    <li class="mb-4">The Site does not offer users the ability to submit or post content. However, we may provide opportunities to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, personal information, or other material (collectively, “Contributions”). Contributions may be viewable by other users and through third-party websites. Any Contributions you transmit may be treated according to the Site Privacy Policy. By creating or making available any Contributions, you represent and warrant that:</li>
                    <li class="mb-4">The creation, distribution, transmission, public display, performance, accessing, downloading, or copying of your Contributions do not and will not infringe proprietary rights, including but not limited to copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                    <li class="mb-4">You are the creator and owner of, or have the necessary licenses, rights, consents, releases, and permissions to use and authorize us, the Site, and other users to use your Contributions as contemplated by the Site and these Terms of Use.</li>
                    <li class="mb-4">You have the written consent, release, and/or permission of each identifiable individual in your Contributions to use their name or likeness for inclusion and use as contemplated by the Site and these Terms of Use.</li>
                    <li class="mb-4">Your Contributions are not false, inaccurate, or misleading.</li>
                    <li class="mb-4">Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                    <li class="mb-4">Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                    <li class="mb-4">Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                    <li class="mb-4">Your Contributions are not used to harass or threaten (in the legal sense) any person or to promote violence against a specific person or class of people.</li>
                    <li class="mb-4">Your Contributions do not violate any applicable law, regulation, or rule.</li>
                    <li class="mb-4">Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                    <li class="mb-4">Your Contributions do not contain material that solicits personal information from anyone under the age of 18 or exploits people under 18 in a sexual or violent manner.</li>
                    <li class="mb-4">Your Contributions do not violate any applicable law concerning child pornography or any law intended to protect the health or well-being of minors.</li>
                    <li class="mb-4">Your Contributions do not include offensive comments related to race, national origin, gender, sexual preference, or physical handicap.</li>
                    <li class="mb-4">Your Contributions do not violate or link to material that violates any provision of these Terms of Use or any applicable law or regulation.</li>
                    <li class="mb-4">Any use of the Site or Marketplace Offerings in violation of the above provisions violates these Terms of Use and may result in termination or suspension of your rights to use the Site and Marketplace Offerings.</li>
                </ul>
              </div>
            `,
        },
        {
            question: "Contribution License",
            answer: `
              <div class="mb-4">You and Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</div>
              <div class="mb-4">By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.</div>
              <div>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</div>
            `,
        },
        {
            question: "Guidelines for Reviews",
            answer: `
              <div class="mb-4">We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organise a campaign encouraging others to post reviews, whether positive or negative.</div>
              <div>We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to reviews.</div>
            `,
        },
        {
            question: "Submissions",
            answer: `
              <div>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site or the Marketplace Offerings (“Submissions”) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.</div>
            `,
        },
        {
            question: "Site Management",
            answer: `
              <div>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site and the Marketplace Offerings.</div>
            `,
        },
        {
            question: "Privacy Policy",
            answer: `
              <div>We care about data privacy and security. Please review our Privacy Policy: <a href="https://intrixlifestyle.com.my/pages/privacy-policy" target="_blank">https://intrixlifestyle.com.my/pages/privacy-policy</a>. By using the Site or the Marketplace Offerings, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site and the Marketplace Offerings are hosted in Malaysia. If you access the Site or the Marketplace Offerings from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Malaysia, then through your continued use of the Site, you are transferring your data to Malaysia, and you expressly consent to have your data transferred to and processed in Malaysia.</div>
            `,
        },
        {
            question: "Term and Termination",
            answer: `
              <div class="mb-4">These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</div>
              <div>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</div>
            `,
        },
        {
            question: "Modifications and Interruptions",
            answer: `
              <div class="mb-4">We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Marketplace Offerings without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or the Marketplace Offerings.</div>
              <div>We cannot guarantee the Site and the Marketplace Offerings will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site or the Marketplace Offerings at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site or the Marketplace Offerings during any downtime or discontinuance of the Site or the Marketplace Offerings. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or the Marketplace Offerings or to supply any corrections, updates, or releases in connection therewith.</div>
            `,
        },
        {
            question: "Governing Law",
            answer: `
              <div>These terms shall be governed by and defined following the laws of Malaysia. INTRIX LIFESTYLE SDN BHD and yourself irrevocably consent that the courts of Malaysia shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</div>
            `,
        },
        {
            question: "Corrections",
            answer: `
              <div>There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Marketplace Offerings, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</div>
            `,
        },
        {
            question: "Disclaimer",
            answer: `
              <div>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THIS SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</div>
            `,
        },
        {
            question: "Limitations of Liability",
            answer: `
              <div>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</div>
            `,
        },
        {
            question: "Indemnification",
            answer: `
              <div>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</div>
            `,
        },
        {
            question: "Electronic Communications, Transactions, and Signatures",
            answer: `
              <div>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</div>
            `,
        },
        {
            question: "Miscellaneous",
            answer: `
              <div>These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.</div>
            `,
        },
        {
            question: "Contact Us",
            answer: `
              <div class="mb-4">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</div>
              <div class="mb-4">INTRIX LIFESTYLE SDN BHD</div>
              <div class="mb-4">2, Teknologi Kubik, No. 6, Taman Sains Selangor, 1, Jalan Teknologi 3/4, Kota Damansara, 47810 Petaling Jaya, Selangor</div>
              <div class="mb-4">Phone: <a href="1-700-81-6609" target="_blank">1-700-81-6609</a></div>
              <div><a href="ecommerce@intrixgroup.com">ecommerce@intrixgroup.com</a></div>
            `,
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full flex flex-col lg:flex-row justify-between mx-auto mt-8 py-4 gap-6 lg:gap-[15vw] container px-4">
                <h2 className="text-[24px] sm:text-[30px] md:text-[40px] text-left font-bold md:mb-4 text-[#343637] lg:max-w-[200px] leading-[1.2] sm:leading-10">
                    Terms and Conditions
                </h2>
                <div className="space-y-2">
                    {tnc.map((tnc, index) => (
                        <div key={index} className="border-b-2 border-[#DDDFE0]">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left flex justify-between items-center py-3 focus:outline-none"
                            >
                                <span className="text-[18px] font-bold text-[#343637]">{tnc.question}</span>
                                <span
                                    className={`transform transition-transform duration-300 text-[18px] sm:text-[1.5em] text-[#1A0F91] ${
                                        openIndex === index ? "rotate-45" : "rotate-0"
                                    }`}
                                >
                                    +
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-[5000px] pb-6" : "max-h-0"}`}>
                                <div className="text-[16px] text-[#3C3C43D9] text-left" dangerouslySetInnerHTML={{ __html: tnc.answer }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Page;
