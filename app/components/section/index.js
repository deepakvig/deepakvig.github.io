'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const About = require('./about');
const Work = require('./work');
const Education = require('./education');
const Skills = require('./skills');
const Portfolio = require('./portfolio');
const Footer = require('./footer');

const Section = React.createClass({
    propTypes: {
        basics: ResumePropTypes.basics,
        work: ResumePropTypes.work_set,
        education: ResumePropTypes.education_set,
        skills: ResumePropTypes.skills_set,
        languages: ResumePropTypes.languages_set,
        portfolio: ResumePropTypes.publications_set
    },

    render: function () {
        const skills_content = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skills_content}/>
                <Portfolio content={this.props.portfolio}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
