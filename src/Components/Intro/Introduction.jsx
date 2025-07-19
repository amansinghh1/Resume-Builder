
import { Flex, Container, Heading, Stack, Text, Button, Box, Collapse, Icon} from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png';
import { Image } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Link } from 'react-router-dom';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
    };

    const showTheme = (e) => {
        setShowComponent(!showComponent);
        setCurrentTheme(e.target.id);
    };

    const faqData = [
        { question: "What is QUICKRESUME?", answer: "QUICKRESUME is an online platform that helps users create professional resumes quickly and easily. Our user-friendly interface and customizable templates are designed to make resume building stress-free and efficient." },
        { question: "Is QUICKRESUME free to use?", answer: "QUICKRESUME offers both free and premium plans. The free plan includes access to basic resume templates and features, while the premium plan offers advanced templates, customization options, and additional features." },
        { question: "How do I start creating my resume?", answer: "Simply sign up for an account on QUICKRESUME, choose a template that fits your needs, and follow the step-by-step guide to fill in your details. You can preview your resume as you go and make adjustments anytime." },
        { question: "Can I customize my resume template?", answer: "Yes! QUICKRESUME offers a variety of customization options, including font styles, colors, section layouts, and more. Premium users have access to even more advanced customization features." },
        { question: "Will my resume be ATS-friendly?", answer: "Yes, all of our templates are designed to be ATS (Applicant Tracking System) friendly, ensuring that your resume can be easily scanned and read by employers' recruiting software." },
        { question: "Can I download my resume after creating it?", answer: "Absolutely! Once you're satisfied with your resume, you can download it in various formats, such as PDF, Word, or text file. Premium users can also download in high-resolution formats." },
        { question: "How do I edit my resume after I’ve created it?", answer: "You can log into your QUICKRESUME account at any time to edit or update your resume. All changes are saved automatically, and you can re-download the updated version." },
        { question: "Do you offer customer support?", answer: "Yes, we offer customer support through live chat, email, and our help center. Our support team is available to assist you with any questions or issues you may have." },
        { question: "Is my data secure on QUICKRESUME?", answer: "We take your privacy and security seriously. QUICKRESUME uses industry-standard encryption to protect your personal information and resume data. We also have strict privacy policies in place." },
        { question: "Can I create multiple resumes for different jobs?", answer: "Yes, you can create and save multiple resumes under your account. This feature allows you to tailor each resume to specific job applications, making it easier to target different roles and industries." }
    ];

    const [openFAQ, setOpenFAQ] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = () => setOpenFAQ(!openFAQ);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const FAQSection = () => (
        <Box mt={10} textAlign="left" style={{ paddingLeft: '1.5rem' }}>
            <Heading
                fontSize="2xl"
                mb={4}
                cursor="pointer"
                onClick={toggleFAQ}
                style={{ textAlign: 'left', fontWeight: 'bold', color: '#2D3748' }}
            >
                Frequently Asked Questions (FAQs) <Icon as={openFAQ ? FaChevronDown : FaChevronRight} />
            </Heading>
            <Collapse in={openFAQ} animateOpacity>
                {faqData.map((item, index) => (
                    <Box key={index} mb={4} style={{ marginBottom: '1rem' }}>
                        <Text
                            fontWeight="bold"
                            cursor="pointer"
                            onClick={() => toggleAnswer(index)}
                            display="flex"
                            alignItems="center"
                            style={{ color: '#4A5568', marginBottom: '0.5rem' }}
                        >
                            {item.question} <Icon as={activeIndex === index ? FaChevronDown : FaChevronRight} ml={2} />
                        </Text>
                        <Collapse in={activeIndex === index} animateOpacity>
                            <Text mt={2} style={{ paddingLeft: '1.5rem', color: '#718096' }}>
                                {item.answer}
                            </Text>
                        </Collapse>
                    </Box>
                ))}
            </Collapse>
        </Box>
    );
    

    const Footer = () => (
        <Box as="footer" mt={10} py={4} textAlign="center" bg="gray.100" _dark={{ bg: 'gray.800' }}>
            <Text>
                <Link to="/contact-us" style={{ color: '#38B2AC' }}>Contact Us</Link> | &copy; {new Date().getFullYear()} QuickResume. All rights reserved.
            </Text>
        </Box>
    );

    return (
        <>
            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}
                >
                    {selectBtn ? (
                        <>
                            <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
                                Your resume in three{' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    easy{' '}
                                </Text>
                                steps
                            </Heading>

                            <Text color={'gray.500'} maxW={'3xl'}>
                                Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offers different template options, so you can select the template that best fits your needs and style.
                            </Text>

                            <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                <Box className='Bullet_Points'>
                                    <Button>1</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Select a template from our collection.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>2</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Build your resume using our easy-to-use resume builder.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>3</Button>
                                    <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                        Download your resume.
                                    </Text>
                                </Box>
                            </Flex>
                        </>
                    ) : (
                        <Heading m={'1.5'} textAlign={{ base: 'center', md: 'start' }} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
                            Select a{' '}
                            <Text as={'span'} color={'#38B2AC'}>
                                Template{' '}
                            </Text>
                            from the list
                        </Heading>
                    )}
                </Stack>

                {selectBtn ? (
                    <Stack>
                        <Image src={homeLogo} alt='home logo' my={'4'} style={{ width: '550px', height: 'auto' }} />
                        <Button
                            onClick={handleSelectTemplate}
                            rounded={'full'}
                            px={6}
                            className='mb-4'
                            colorScheme={'teal'}
                            bg={'#38B2AC'}
                            _hover={{ bg: '#319795' }}
                        >
                            Select Template
                        </Button>
                    </Stack>
                ) : (
                    <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                        {ThemeTemplateData.map((item, index) => (
                            <div key={index} className="template" onClick={showTheme}>
                                <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                            </div>
                        ))}
                    </Box>
                )}
            </Container>

            
            <FAQSection />

            
            <Footer />
        </>
    );
}

