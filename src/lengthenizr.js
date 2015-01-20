(function() {

    function textNodesUnder(rootNode) {
        var treeWalker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
        var nodeList = [];
        while (treeWalker.nextNode()) {
            nodeList.push(treeWalker.currentNode);
        }
        return nodeList;
    }

    var textNodes = textNodesUnder(document);
    for (var i = 0; i < textNodes.length; i++) {
        textNodes[i].nodeValue += textNodes[i].nodeValue;
    }

}());
