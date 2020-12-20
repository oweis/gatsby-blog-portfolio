import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => {
  
  const entryCertificationPlans = entry.getIn(['data', 'certification', 'plans'])
  const certificationPlans = entryCertificationPlans ? entryCertificationPlans.toJS() : []
    return ( 
      <AboutPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
        certification={{
          heading: entry.getIn(['data', 'certification', 'heading']),
          description: entry.getIn(['data', 'certification', 'description']),
          plans: certificationPlans,
        }}
      />
)
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
