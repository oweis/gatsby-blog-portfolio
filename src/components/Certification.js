import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Certification = ({ data }) => (
  <div className="columns">
    {data.map((certification) => (
      <div key={certification.technology} className="column">
        <section className="section">
        <a href={certification.link}>
          <h4 className="has-text-centered has-text-weight-semibold">
            {certification.technology}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
              {certification.certification_code}
              <PreviewCompatibleImage imageInfo={certification.certification_image} />
          </h2>
          <p className="has-text-weight-semibold">{certification.description}</p>
          <ul>
            {certification.items.map((item) => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
          </a>
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
