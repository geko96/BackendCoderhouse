const express = require('express')
const app = express()
const PORT = 8080

let arr = [{"name":"Hamburguesa","id":0,"categoria":"Alimentos","precio":700,"description":"Hamburguesa XL","initial":0,"stock":30,"img":["https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg"],"fullDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dui eget sem ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tristique sapien consequat sapien congue bibendum. Integer et lectus in metus convallis volutpat id at dolor. Pellentesque sodales lectus vel bibendum rutrum. Aliquam ex mi, eleifend vel sodales eget, tristique eu nisi. Aenean mattis odio quis leo lacinia, id gravida elit ultrices. Sed blandit, sem sed vulputate laoreet, nisl ipsum interdum lectus, vel euismod libero ex sit amet ante. Suspendisse ornare magna in mauris efficitur aliquet. Integer felis quam, feugiat vitae tellus vitae, dictum scelerisque enim. Donec blandit sed quam quis facilisis. Vestibulum dui est, luctus vitae rhoncus non, tincidunt vel ligula. Etiam sit amet tincidunt ante, id hendrerit mi. Nam in accumsan est."},{"name":"jabon","id":1,"categoria":"Limpieza","precio":500,"description":"jabon para lavarropas","initial":0,"stock":10,"img":["https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg"],"fullDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dui eget sem ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tristique sapien consequat sapien congue bibendum. Integer et lectus in metus convallis volutpat id at dolor. Pellentesque sodales lectus vel bibendum rutrum. Aliquam ex mi, eleifend vel sodales eget, tristique eu nisi. Aenean mattis odio quis leo lacinia, id gravida elit ultrices. Sed blandit, sem sed vulputate laoreet, nisl ipsum interdum lectus, vel euismod libero ex sit amet ante. Suspendisse ornare magna in mauris efficitur aliquet. Integer felis quam, feugiat vitae tellus vitae, dictum scelerisque enim. Donec blandit sed quam quis facilisis. Vestibulum dui est, luctus vitae rhoncus non, tincidunt vel ligula. Etiam sit amet tincidunt ante, id hendrerit mi. Nam in accumsan est."},{"name":"lavandina","id":2,"categoria":"Limpieza","precio":100,"description":"lavandina","initial":3,"stock":100,"img":["https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg"],"fullDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dui eget sem ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tristique sapien consequat sapien congue bibendum. Integer et lectus in metus convallis volutpat id at dolor. Pellentesque sodales lectus vel bibendum rutrum. Aliquam ex mi, eleifend vel sodales eget, tristique eu nisi. Aenean mattis odio quis leo lacinia, id gravida elit ultrices. Sed blandit, sem sed vulputate laoreet, nisl ipsum interdum lectus, vel euismod libero ex sit amet ante. Suspendisse ornare magna in mauris efficitur aliquet. Integer felis quam, feugiat vitae tellus vitae, dictum scelerisque enim. Donec blandit sed quam quis facilisis. Vestibulum dui est, luctus vitae rhoncus non, tincidunt vel ligula. Etiam sit amet tincidunt ante, id hendrerit mi. Nam in accumsan est."},{"name":"perfume","id":3,"categoria":"Perfumes","precio":2500,"description":"Perfue para ropa","initial":1,"stock":7,"img":["https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg"],"fullDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dui eget sem ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tristique sapien consequat sapien congue bibendum. Integer et lectus in metus convallis volutpat id at dolor. Pellentesque sodales lectus vel bibendum rutrum. Aliquam ex mi, eleifend vel sodales eget, tristique eu nisi. Aenean mattis odio quis leo lacinia, id gravida elit ultrices. Sed blandit, sem sed vulputate laoreet, nisl ipsum interdum lectus, vel euismod libero ex sit amet ante. Suspendisse ornare magna in mauris efficitur aliquet. Integer felis quam, feugiat vitae tellus vitae, dictum scelerisque enim. Donec blandit sed quam quis facilisis. Vestibulum dui est, luctus vitae rhoncus non, tincidunt vel ligula. Etiam sit amet tincidunt ante, id hendrerit mi. Nam in accumsan est."},{"name":"detergente","id":4,"categoria":"Limpieza","precio":150,"description":"Detergente amarillo","initial":0,"stock":20,"img":["https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg"],"fullDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dui eget sem ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tristique sapien consequat sapien congue bibendum. Integer et lectus in metus convallis volutpat id at dolor. Pellentesque sodales lectus vel bibendum rutrum. Aliquam ex mi, eleifend vel sodales eget, tristique eu nisi. Aenean mattis odio quis leo lacinia, id gravida elit ultrices. Sed blandit, sem sed vulputate laoreet, nisl ipsum interdum lectus, vel euismod libero ex sit amet ante. Suspendisse ornare magna in mauris efficitur aliquet. Integer felis quam, feugiat vitae tellus vitae, dictum scelerisque enim. Donec blandit sed quam quis facilisis. Vestibulum dui est, luctus vitae rhoncus non, tincidunt vel ligula. Etiam sit amet tincidunt ante, id hendrerit mi. Nam in accumsan est."},{"name":"jabon solido","id":5,"categoria":"Limpieza","precio":5500,"description":"jabon duro","initial":0,"stock":30,"img":["https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg","https://cantilever.com.ar/norman.jpg"],"fullDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum dui eget sem ultrices scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla tristique sapien consequat sapien congue bibendum. Integer et lectus in metus convallis volutpat id at dolor. Pellentesque sodales lectus vel bibendum rutrum. Aliquam ex mi, eleifend vel sodales eget, tristique eu nisi. Aenean mattis odio quis leo lacinia, id gravida elit ultrices. Sed blandit, sem sed vulputate laoreet, nisl ipsum interdum lectus, vel euismod libero ex sit amet ante. Suspendisse ornare magna in mauris efficitur aliquet. Integer felis quam, feugiat vitae tellus vitae, dictum scelerisque enim. Donec blandit sed quam quis facilisis. Vestibulum dui est, luctus vitae rhoncus non, tincidunt vel ligula. Etiam sit amet tincidunt ante, id hendrerit mi. Nam in accumsan est."}]


app.get('/api/atucasa', (req,res) => {
    return res.send(arr)
})


const server = app.listen(PORT, () => {
    console.log(`Server iniciado en el puerto ${PORT}`)
})