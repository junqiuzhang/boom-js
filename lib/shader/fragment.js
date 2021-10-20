export default "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_text_position;\nvoid main() {\n  gl_FragColor = texture2D(u_image, v_text_position);\n}";
