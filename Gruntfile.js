module.exports = function (grunt) {
  grunt.initConfig(grunt.file.readJSON("config.json"));

  grunt.registerTask("default", function () {
    grunt.log.writeln("GRUNT");
  });
};