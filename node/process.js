let os = require('os')
const PROCESS = {
        entry_args: process.argv.slice(2),
        platform_name: process.platform,
        node_version: process.version,
        memory_rss: process.memoryUsage().rss,
        path_exe: process.cwd(),
        process_id: process.pid,
        app_file: process.argv[1],
        cpus: os.cpus().length
    }

module.exports = PROCESS