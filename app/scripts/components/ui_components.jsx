'use strict';

var React = require('react');

var UiComp = React.createClass({
  getInitialState: function() {
    return ({
      images: {
        // facebook: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" className="social_icons"><path d="M89.584 155.14V84.377h23.742l3.562-27.585H89.584v-17.61c0-7.983 2.208-13.424 13.67-13.424l14.595-.007V1.08C115.324.752 106.66 0 96.576 0 75.52 0 61.104 12.853 61.104 36.452v20.34H37.29V84.38h23.814v70.76h28.48z" className="social__icon"></path></svg>,
        // twitter: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="social_icons"><path d="M31.993 6.077c-1.177.523-2.44.876-3.77 1.033 1.355-.812 2.396-2.098 2.887-3.63-1.27.75-2.673 1.3-4.168 1.592C25.744 3.797 24.038 3 22.15 3c-3.626 0-6.563 2.938-6.563 6.563 0 .514.057 1.016.17 1.496C10.3 10.784 5.464 8.17 2.226 4.2c-.564.97-.888 2.098-.888 3.3 0 2.28 1.158 4.287 2.918 5.465-1.075-.035-2.087-.33-2.972-.82v.08c0 3.182 2.26 5.835 5.264 6.438-.55.15-1.13.23-1.73.23-.423 0-.833-.04-1.233-.117.834 2.606 3.26 4.504 6.13 4.558-2.245 1.76-5.075 2.81-8.15 2.81-.53 0-1.053-.03-1.566-.09C2.906 27.913 6.356 29 10.063 29c12.072 0 18.675-10 18.675-18.675 0-.284-.008-.568-.02-.85 1.283-.925 2.395-2.08 3.276-3.398z" className="social__icon"></path></svg>,
        // linkedin: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" className="social_icons"><path d="M49.837 48.137V36.425c0-6.274-3.35-9.194-7.816-9.194-3.603 0-5.218 1.983-6.118 3.374V27.71h-6.79c.09 1.917 0 20.428 0 20.428h6.79v-11.41c0-.61.044-1.22.224-1.656.49-1.22 1.607-2.482 3.482-2.482 2.458 0 3.44 1.873 3.44 4.618v10.93h6.79zM21.96 24.922c2.366 0 3.84-1.57 3.84-3.53-.043-2.004-1.474-3.53-3.796-3.53s-3.84 1.526-3.84 3.53c0 1.96 1.473 3.53 3.752 3.53h.043zm3.394 23.215V27.71h-6.79v20.427h6.79zM3 4h60v60H3V4z" className="social__icon"></path></svg>,
        // coffe: <svg xmlns="http://www.w3.org/2000/svg" style="" viewBox="0 0 21 24" preserveAspectRatio="xMidYMid meet" width="21" height="24" className="session__icon"><path fill-rule="evenodd" d="M 16.84 21.216 C 16.276 21.216 15.745 21.096 15.25 20.89 C 13.849 22.773 11.632 23.995 9.133 23.995 C 9.133 23.995 7.699 23.995 7.699 23.995 C 3.448 23.995 -0.002 20.472 -0.002 16.129 C -0.002 16.129 -0.002 11.803 -0.002 11.803 C -0.002 11.45 0.275 11.174 0.62 11.174 C 0.62 11.174 16.219 11.174 16.219 11.174 C 16.558 11.174 16.834 11.45 16.834 11.803 C 16.834 11.803 16.834 12.705 16.834 12.705 C 16.834 12.705 16.84 12.705 16.84 12.705 C 19.13 12.705 21.001 14.615 21.001 16.96 C 21.001 19.305 19.13 21.216 16.84 21.216 Z M 16.84 15.082 C 16.84 15.082 16.834 15.082 16.834 15.082 C 16.834 15.082 16.834 16.129 16.834 16.129 C 16.834 17.057 16.67 17.948 16.383 18.772 C 16.526 18.816 16.68 18.838 16.84 18.838 C 17.855 18.838 18.679 17.996 18.679 16.96 C 18.679 15.923 17.855 15.082 16.84 15.082 Z M 11.615 8.652 C 11.615 8.652 11.599 8.674 11.599 8.674 C 11.631 8.622 12.352 7.332 11.488 4.68 C 10.287 1.001 13.389 0.019 13.389 0.019 C 13.389 0.019 13.403 -0.003 13.403 -0.003 C 13.373 0.051 12.652 1.34 13.517 3.991 C 14.717 7.671 11.615 8.652 11.615 8.652 Z M 7.885 8.652 C 7.885 8.652 7.87 8.674 7.87 8.674 C 7.901 8.622 8.623 7.332 7.756 4.68 C 6.556 1.001 9.661 0.019 9.661 0.019 C 9.661 0.019 9.675 -0.003 9.675 -0.003 C 9.643 0.051 8.923 1.34 9.789 3.991 C 10.988 7.671 7.885 8.652 7.885 8.652 Z M 4.155 8.652 C 4.155 8.652 4.141 8.674 4.141 8.674 C 4.173 8.622 4.892 7.332 4.028 4.68 C 2.827 1.001 5.931 0.019 5.931 0.019 C 5.931 0.019 5.946 -0.003 5.946 -0.003 C 5.914 0.051 5.195 1.34 6.058 3.991 C 7.258 7.671 4.155 8.652 4.155 8.652 Z"></path></svg>,
        // plus: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="23" height="23" viewBox="0 0 23 23" className="session__icon"><image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEUAAACOjo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo4AAAC0joi+AAAAH3RSTlMAAkSWz+9M1QaYmbeam0t6DNQD1kXQ8AWXRgtNnLjxNNCucwAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAACkSURBVCjPdVLtAoIgDByfUmZaQFGZe/+3TPkSDe/XdmzcbgDgQSjjAgVnlEAB2WBCIzOrTljirCLd4hZtOLjgHt1CX1PWD30KZw1yS8kdVAo1AZq7594cG2BVnoGt8hyEl1SrGS/+CCWq8D6E5n39M9Yf3e+qvDuY/wVE1/2CzPt55/18lgm6v32O9f1/08NsO8bVjMziqGXhHYhxdsLJOhP/ww8h6CniSQKSpgAAAABJRU5ErkJggg==" width="23" height="23"></image></svg>,
        // minus: <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="23" height="23" viewBox="0 0 23 23" className="session__icon"><image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAXVBMVEUAAABQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlFQTlEAAAAqgTXwAAAAHXRSTlMAAkSWz+9M1QaYmbeam0vU1kXQevAMBZdGTZy48SlFxf4AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAAAl0lEQVQoz3WSWxLCIAxFE15FaxWoitZm/9tUsBUq6flh5iQ8LgCQQSGVJq2kQKgwHa105mftgWqOdtE9bem/hRP9MyR9ppbPHnhhvEMQxOFBsl5CYL0CnYbRljBjElfIZVtlv2XT9N+X/r31I+vjzvkfgI7PC4bxz3SCodETf/+v9WG2M6YSxpTNnamyA/oYZppD9Mt/eAOHsyofgRv8qQAAAABJRU5ErkJggg==" width="23" height="23"></image></svg>
      }
    });
  },

  render: function() {
    //Get proper object from state due to props
    var imgObj = this.state.images[this.props.img];
    return <div className="session__icons">{imgObj}</div>;
  }
});

module.exports = UiComp;
