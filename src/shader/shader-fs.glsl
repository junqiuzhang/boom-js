precision mediump float;
uniform sampler2D u_image;
uniform mat2 u_trans_tex_matrix;
varying vec2 v_text_position;
void main() {
  gl_FragColor = texture2D(u_image, u_trans_tex_matrix * v_text_position);
}