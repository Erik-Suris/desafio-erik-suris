class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        
        if (itens.length===0) return 'Não há itens no carrinho de compra!'

        let desconto

        switch (metodoDePagamento) {
            case 'dinheiro':
                desconto = 0.05
                break

            case 'debito':
                desconto = 0
                break

            case 'credito':
                desconto = -0.03
                break

            default: return "Forma de pagamento inválida!"
        }

        const cardapio = [
            {
                codigo: 'cafe',
                valor: 3
            },
            {
                codigo: 'chantily',
                valor: 1.5
            },
            {
                codigo: 'suco',
                valor: 6.2
            },
            {
                codigo: 'sanduiche',
                valor: 6.5
            },
            {
                codigo: 'queijo',
                valor: 2
            },
            {
                codigo: 'salgado',
                valor: 7.25
            },
            {
                codigo: 'combo1',
                valor: 9.5
            },
            {
                codigo: 'combo2',
                valor: 7.5
            }
        ]

        const carrinho = []

        let valorDaCompra = 0
        for (let item of itens) {

            const splitItem = item.split(',')

            let quantidade = Number(splitItem[1])

            if (quantidade===0) return 'Quantidade inválida!'

            let codigoQuery = splitItem[0]

            carrinho.push(codigoQuery)

            let indiceDoCardapio = cardapio.findIndex(itemDoCardapio => codigoQuery===itemDoCardapio.codigo)

            if (indiceDoCardapio===-1) return 'Item inválido!'

            let itemDoCardapio = cardapio[indiceDoCardapio]

            if (itemDoCardapio.codigo==='chantily') {

                if (!carrinho.includes('cafe')) return 'Item extra não pode ser pedido sem o principal'

            } else if (itemDoCardapio.codigo==='queijo') {

                if (!carrinho.includes('sanduiche')) return 'Item extra não pode ser pedido sem o principal'

            }

            let valor = itemDoCardapio.valor

            valorDaCompra += valor * quantidade
        }

        let valorDaCompraDescontado = valorDaCompra * (1 - desconto)
        
        return parseFloat(valorDaCompraDescontado.toFixed(2)).toLocaleString("pt-BR", {
            style:"currency",
            currency:"BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    }

}

export { CaixaDaLanchonete };