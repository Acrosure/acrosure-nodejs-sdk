function name() {
  console.log(this)
  console.log('application' + this.token);
}

export default name;