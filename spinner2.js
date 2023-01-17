let animation = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let index = 0
function spin() {
  process.stdout.write('\r' + animation[index++] + ' ');
  if (index === animation.length) {
    process.stdout.write('\n');
    return;
  }
  setTimeout(spin, 200);
}
spin();