import React from 'react';
import '../assets/css/UnitCard.css'; 
import UnitCard from './UnitCard';
import thesis_image from '../assets/images/thesis_image.png'
import home_page from '../assets/images/home_page.png'
import coding_image from '../assets/images/coding_image.png'
import UX_UI_image from '../assets/images/UX_UI_image.png'
import GBVS_image from '../assets/images/gbvs_image.png'
import soon_image from '../assets/images/soon_image.png'


interface UnitCardContainerInt {}


//Dont worry, these will be moved to a resource file :)
const UnitCardContainer: React.FC<UnitCardContainerInt> = () => {
  return (
    <div className='container'>
        <div className='side left'></div>
        <div className='unit-card-container'>
            <UnitCard imageaddress={thesis_image} relatedLinkHeader ={'Thesis Aaltodoc'} relatedLink = {'https://aaltodoc.aalto.fi/handle/123456789/124080'} header='In Collaboration with Arkance Systems ' text='During the thesis I got a chance to conduct an in-person usability study for Arkance Systems Finland, where I assessed the current state of usability of the
            Holixa licencing portal. Based on the qualitative and quantitative results I created a new low fidelity prototype showing the course of improvements the development team should consider. For the results, you can check the appendix of the thesis!'/>
            <UnitCard imageaddress={home_page} relatedLinkHeader ={'Github Repository'} relatedLink = {"https://github.com/Telomeri/Homepage"} header='Work in Progress' text='A project very much still in the early stages.
            The foundation was designed in Figma, and the initial plan along source code is public. Ideally this iteration will be accompanied by multiple other pages, which will replace the current card based UI. 
            The data will be stored in a postgres database, backend will either be node.js or asp.net, and hosting service aws/azure. If the current portfolio or the design does not spark joy, fear not as this is just the beginning.'/>
            <UnitCard imageaddress={UX_UI_image} relatedLinkHeader ={'Barbershop Documents'} relatedLink = {"https://github.com/Telomeri/UXUI/blob/main/Barbershop%20LOFI/Barbershop%20LOFIandHIFI.png"} header='Figma is Fantastic' text='Through my studies, work and hobbies I have been consistently improving my skills in UX and UI design. On the menu are best practices, designer software and functional design, 
            and through rigorous and continuous work I am sure one day I will master the flexbox. Check out my barbershop project! Based on a mock usability study, I have started to design an improved app for my long time barbershop. They are not aware of this. Did I mention I am actively taking Udemy courses to improve my designs?'/>
            <UnitCard imageaddress={coding_image} relatedLinkHeader ={'GitHub Coding'} relatedLink = {"https://github.com/Telomeri"} header='Constantly Improving' text='The amount of courses related to coding I have taken are only rivaled by the amount of code I have written at work. As a software designer, you do not get to only make design 
            some other poor soul has to implement. You are that poor soul, so you must make sure the vision can actually be implemented in a meaningful way. I am currently getting back to web development after spending most of my working hours with .NET (C#), Python and SQL.
            Honestly I think I am pretty good at coding, but the amount of technologies and frameworks out there assure I will never stop challenging myself.'/>
            <UnitCard imageaddress={GBVS_image} relatedLinkHeader ={'GitHub Document'} relatedLink = {"https://github.com/Telomeri/UXUI/blob/main/Website_Color_Palette_Optimization_Utilizing_Graph-Based_22_04_2022_Lari_Haapaniemi.pdf"} header='Data Based Design is Cool' text='One of the projects I did at Aalto was optimizing website designs utilizing saliency models. Basically a Python script hosted a HTML template of a website, 
            and tried the given color palettes on it. Each design got a saliency value utiziling GBVS, and the scores were shown in an XML file. Also the screenshot of the best design could easily be viewed as the result. It was pretty cool, public in my GitHub.'/>
            <UnitCard imageaddress={soon_image} relatedLinkHeader ={'LinkedIn'} relatedLink = {"https://www.linkedin.com/in/lari-haapaniemi-it/"} header='More to come' text='If I seem like someone you would like to work with, but want to wait around and see how I develop, come check the page every now and then :) The URL might change, but I will 
            make sure to keep the current one at my GitHub and LinkedIn. I have a few good ideas for issues I would like to tackle, such as a way to log your bouldering routes. It should be noted that I am working full time, and believe in a healthly 
            work-life balance, so this will mainly be updated on the weekends!'/>
        </div>
        <div className='side right'></div>
    </div>
  );
};

export default UnitCardContainer;