precision mediump float;
attribute vec2 a_position;
attribute vec2 a_center;
uniform mat4 u_trans_pos_matrix;
uniform float u_time;
varying vec2 v_text_position;
float rand(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}
void main() {
  v_text_position = a_position;
  vec2 dir = vec2(rand(a_center) - 0.5, rand(a_center + vec2(1, 1)) - 0.5);
  vec2 pos = a_position + dir * u_time;
  gl_Position = u_trans_pos_matrix * vec4(pos.x, pos.y, 0.0, 1.0);
}