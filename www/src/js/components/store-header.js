
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react')
var ReactBackbone = require('react.backbone');

var SectionView = React.createClass({
  render: function() {
    var section = this.props.section;

    return (
      <li className="p-inline-list__item">
        <a href={"/store/section/" + section}>{section}</a>
      </li>
    );
  }
})

module.exports = React.createBackboneClass({
  render: function() {
    var sections = this.props.sections || [];

    return (
      <div>
        <h2 className="col-4">{this.props.title}</h2>
        <span className="u-float--right">
          <ul className="p-inline-list u-float--right">
            {sections.map(function(section) {
                              return (
                                <SectionView key={section} section={section} />
                              );
                            })}
            <li className="p-inline-list__item">
              <a href="/store/section/private">private</a>
            </li>
          </ul>
        </span>
      </div>
    );
  }
});
