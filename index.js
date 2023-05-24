const mysuperlibrary = require('./lib')

mysuperlibrary.plugins.register({
  hooks: {
    'hooks:print': ({data}, handler) => {
      // Alter the argument
      data.message = 'Hello World'
      // Print a message before the library code
      console.log('>>>>>>>>>>>')
      // Call the original handler
      const result = handler.call(null, {data: data})
      // Print a message after the library code
      console.log('<<<<<<<<<<<')
      return result
    }
  }
})
mysuperlibrary.print()