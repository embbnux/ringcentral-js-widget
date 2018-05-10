const program = require('commander');
const { version } = require('../package');
const { generateModule } = require('./module');
const { generateProject } = require('./project');
const { getModulesDistination } = require('./helper');

program
  .version(version)
  .description('RingCentral Widgets CLI');

program
  .command('generate <resource> <name>')
  .alias('g')
  .option('-d, --dependences [dependences]', 'dependences', (val, memo) => {
    memo.push(val);
    return memo;
  }, [])
  .description('Generate a resource')
  .action((resource, name, options) => {
    if (resource === 'Module') {
      const distination = getModulesDistination();
      if (!distination) {
        throw Error('Modules folder not found');
      }
      generateModule({ name, distination, dependences: options.dependences });
    }
  });

program
  .command('new [projectName]')
  .description('Generate a new project')
  .action((name) => {
    generateProject({
      appName: 'Test',
      name,
    });
  });

program.parse(process.argv);
