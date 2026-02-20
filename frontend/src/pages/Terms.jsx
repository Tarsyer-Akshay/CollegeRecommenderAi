import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const Terms = () => {
    return (
        <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <SEOHead
                title="Terms of Service"
                description="Review RankkMate's terms of service, disclaimer, and usage policies for our JEE college prediction tool."
                canonicalPath="/terms"
            />
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                        Terms of Service & Disclaimer
                    </h1>

                    <div className="prose prose-purple max-w-none text-gray-700 space-y-6">
                        <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using the RankkMate website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or software) on RankkMate's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>modify or copy the materials;</li>
                                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                <li>attempt to decompile or reverse engineer any software contained on RankkMate's website;</li>
                                <li>remove any copyright or other proprietary notations from the materials; or</li>
                                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                <p className="font-semibold text-yellow-800 mb-2">Important Notice:</p>
                                <p className="text-yellow-700">
                                    The materials on RankkMate's website are provided on an 'as is' basis. RankkMate makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>
                                <p className="text-yellow-700 mt-4">
                                    Further, RankkMate does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                                    <strong> RankkMate is an independent platform and is NOT affiliated with JOSAA, CSAB, IITs, or any government body.</strong>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                            <p>
                                In no event shall RankkMate or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on RankkMate's website, even if RankkMate or a RankkMate authorized representative has been notified orally or in writing of the possibility of such damage.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                            <p>
                                The materials appearing on RankkMate's website could include technical, typographical, or photographic errors. RankkMate does not warrant that any of the materials on its website are accurate, complete or current. RankkMate may make changes to the materials contained on its website at any time without notice. However RankkMate does not make any commitment to update the materials.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                            <p>
                                RankkMate has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by RankkMate of the site. Use of any such linked website is at the user's own risk.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
