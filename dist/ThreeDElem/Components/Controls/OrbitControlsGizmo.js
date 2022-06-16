"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrbitControlsGizmo = void 0;

var _three = require("three");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrbitControlsGizmo = /*#__PURE__*/_createClass(function OrbitControlsGizmo(orbitControls, options) {
  var _this = this;

  _classCallCheck(this, OrbitControlsGizmo);

  options = Object.assign({
    size: 90,
    padding: 8,
    bubbleSizePrimary: 8,
    bubbleSizeSecondary: 6,
    lineWidth: 2,
    fontSize: "12px",
    fontFamily: "arial",
    fontWeight: "bold",
    fontColor: "#222222",
    className: "obit-controls-gizmo",
    colors: {
      x: ["#f73c3c", "#942424"],
      y: ["#6ccb26", "#417a17"],
      z: ["#178cf0", "#0e5490"]
    }
  }, options);
  this.lock = false;
  this.lockX = false;
  this.lockY = false;

  this.update = function () {
    if (_this.lock) return;
    camera.updateMatrix();
    invRotMat.extractRotation(camera.matrix).invert();

    for (var i = 0, length = axes.length; i < length; i++) {
      setAxisPosition(axes[i], invRotMat);
    } // Sort the layers where the +Z position is last so its drawn on top of anything below it


    axes.sort(function (a, b) {
      return a.position.z > b.position.z ? 1 : -1;
    }); // Draw the layers

    drawLayers(true);
  };

  this.dispose = function () {
    orbit.removeEventListener("change", _this.update);
    orbit.removeEventListener("start", function () {
      return _this.domElement.classList.add("inactive");
    });
    orbit.removeEventListener("end", function () {
      return _this.domElement.classList.remove("inactive");
    });

    _this.domElement.removeEventListener('pointerdown', onPointerDown, false);

    _this.domElement.removeEventListener('pointerenter', onPointerEnter, false);

    _this.domElement.removeEventListener('pointermove', onPointerMove, false);

    _this.domElement.removeEventListener('click', onMouseClick, false);

    window.removeEventListener('pointermove', onDrag, false);
    window.removeEventListener('pointerup', onPointerUp, false);

    _this.domElement.remove();
  }; // Internals


  var scoped = this;
  var orbit = orbitControls;
  var camera = orbitControls.object;
  var invRotMat = new _three.Matrix4();
  var mouse = new _three.Vector3();
  var rotateStart = new _three.Vector2();
  var rotateEnd = new _three.Vector2();
  var rotateDelta = new _three.Vector2();
  var center = new _three.Vector3(options.size / 2, options.size / 2, 0);
  var axes = createAxes();
  var selectedAxis = null;
  var isDragging = false;
  var context;
  var rect;
  var orbitState;
  orbit.addEventListener("change", this.update);
  orbit.addEventListener("start", function () {
    return _this.domElement.classList.add("inactive");
  });
  orbit.addEventListener("end", function () {
    return _this.domElement.classList.remove("inactive");
  });

  function createAxes() {
    // Generate list of axes
    var colors = options.colors;
    var line = options.lineWidth;
    var size = {
      primary: options.bubbleSizePrimary,
      secondary: options.bubbleSizeSecondary
    };
    return [{
      axis: "x",
      direction: new _three.Vector3(1, 0, 0),
      size: size.primary,
      color: colors.x,
      line: line,
      label: "X",
      position: new _three.Vector3(0, 0, 0)
    }, {
      axis: "y",
      direction: new _three.Vector3(0, 1, 0),
      size: size.primary,
      color: colors.y,
      line: line,
      label: "Y",
      position: new _three.Vector3(0, 0, 0)
    }, {
      axis: "z",
      direction: new _three.Vector3(0, 0, 1),
      size: size.primary,
      color: colors.z,
      line: line,
      label: "Z",
      position: new _three.Vector3(0, 0, 0)
    }, {
      axis: "-x",
      direction: new _three.Vector3(-1, 0, 0),
      size: size.secondary,
      color: colors.x,
      position: new _three.Vector3(0, 0, 0)
    }, {
      axis: "-y",
      direction: new _three.Vector3(0, -1, 0),
      size: size.secondary,
      color: colors.y,
      position: new _three.Vector3(0, 0, 0)
    }, {
      axis: "-z",
      direction: new _three.Vector3(0, 0, -1),
      size: size.secondary,
      color: colors.z,
      position: new _three.Vector3(0, 0, 0)
    }];
  }

  function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = options.size;
    canvas.height = options.size;
    canvas.classList.add(options.className);
    canvas.addEventListener('pointerdown', onPointerDown, false);
    canvas.addEventListener('pointerenter', onPointerEnter, false);
    canvas.addEventListener('pointermove', onPointerMove, false);
    canvas.addEventListener('click', onMouseClick, false);
    context = canvas.getContext("2d");
    return canvas;
  }

  function onPointerDown(e) {
    rotateStart.set(e.clientX, e.clientY);
    orbitState = orbit.enabled;
    orbit.enabled = false;
    window.addEventListener('pointermove', onDrag, false);
    window.addEventListener('pointerup', onPointerUp, false);
  }

  function onPointerUp() {
    setTimeout(function () {
      return isDragging = false;
    }, 0);
    scoped.domElement.classList.remove("dragging");
    orbit.enabled = orbitState;
    window.removeEventListener('pointermove', onDrag, false);
    window.removeEventListener('pointerup', onPointerUp, false);
  }

  function onPointerEnter() {
    rect = scoped.domElement.getBoundingClientRect();
  }

  function onPointerMove(e) {
    if (isDragging || scoped.lock) return;
    var currentAxis = selectedAxis;
    selectedAxis = null;
    if (e) mouse.set(e.clientX - rect.left, e.clientY - rect.top, 0); // Loop through each layer

    for (var i = 0, length = axes.length; i < length; i++) {
      var distance = mouse.distanceTo(axes[i].position);
      if (distance < axes[i].size) selectedAxis = axes[i];
    }

    if (currentAxis !== selectedAxis) drawLayers();
  }

  function onDrag(e) {
    if (scoped.lock) return;
    if (!isDragging) scoped.domElement.classList.add("dragging");
    isDragging = true;
    selectedAxis = null;
    rotateEnd.set(e.clientX, e.clientY);
    rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(0.5);
    if (!scoped.lockX) orbit.rotateLeft(2 * Math.PI * rotateDelta.x / scoped.domElement.height);
    if (!scoped.lockY) orbit.rotateUp(2 * Math.PI * rotateDelta.y / scoped.domElement.height);
    rotateStart.copy(rotateEnd);
    orbit.update();
  }

  function onMouseClick() {
    //FIXME Don't like the current animation
    if (isDragging || !selectedAxis) return;
    var vec = selectedAxis.direction.clone();
    var distance = camera.position.distanceTo(orbit.target);
    vec.multiplyScalar(distance);
    var duration = 400;
    var start = performance.now();
    var maxAlpha = 1;

    function loop() {
      var now = performance.now();
      var delta = now - start;
      var alpha = Math.min(delta / duration, maxAlpha);
      camera.position.lerp(vec, alpha);
      orbit.update();
      if (alpha !== maxAlpha) return requestAnimationFrame(loop);
      onPointerMove();
    }

    loop();
    selectedAxis = null;
  }

  function drawCircle(p) {
    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#FF0000";
    context.beginPath();
    context.arc(p.x, p.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
    context.closePath();
  }

  function drawLine(p1, p2) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#FF0000";
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
    context.closePath();
  }

  function drawLayers(clear) {
    if (clear) context.clearRect(0, 0, scoped.domElement.width, scoped.domElement.height); // For each layer, draw the axis

    for (var i = 0, length = axes.length; i < length; i++) {
      var axis = axes[i]; // Set the color

      var highlight = selectedAxis === axis;
      var color = axis.position.z >= -0.01 ? axis.color[0] : axis.color[1]; // Draw the line that connects it to the center if enabled

      if (axis.line) drawLine(center, axis.position, axis.line, color); // Draw the circle for the axis

      drawCircle(axis.position, axis.size, highlight ? "#FFFFFF" : color); // Write the axis label (X,Y,Z) if provided

      if (axis.label) {
        context.font = [options.fontWeight, options.fontSize, options.fontFamily].join(" ");
        context.fillStyle = options.fontColor;
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillText(axis.label, axis.position.x, axis.position.y);
      }
    }
  }

  function setAxisPosition(axis) {
    var position = axis.direction.clone().applyMatrix4(invRotMat);
    var size = axis.size;
    axis.position.set(position.x * (center.x - size / 2 - options.padding) + center.x, center.y - position.y * (center.y - size / 2 - options.padding), position.z);
  } // Initialization


  this.domElement = createCanvas();
  this.update();
});

exports.OrbitControlsGizmo = OrbitControlsGizmo;