export default `precision mediump float;
attribute vec2 a_point;
attribute vec2 a_center;
uniform mat4 u_trans_pos_matrix;
uniform float u_time;
float random(vec2 v_vector) {
  return fract(sin(dot(v_vector, vec2(12.9898, 78.233))) * 43758.5453);
}
varying vec2 v_text_position;
void main() {
  v_text_position = a_point;
  vec2 v_direction = vec2(random(a_center - vec2(1, 1)) - 0.5, random(a_center + vec2(1, 1)) - 0.5);
  vec2 v_position = a_point + v_direction * u_time;
  gl_Position = u_trans_pos_matrix * vec4(v_position.x, v_position.y, 0.0, 1.0);
}`;
