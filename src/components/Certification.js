import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Certification = ({ data }) => (
  <div className="columns">
    {data.map((certification) => (
      <div key={certification.technology} className="column">
        <section className="section">
        <a target="_blank" href={certification.link}>
            <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
                {certification.certification_code}
            </h2>
            <PreviewCompatibleImage imageInfo={certification.certification_image} />
          </a>
          <p className="has-text-weight-semibold">{certification.description}</p>
          <ul>
            {certification.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Certification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      technology: PropTypes.string,
      certification_code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      link : PropTypes.string,
      certification_image : PropTypes.string,
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Certification
