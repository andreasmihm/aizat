angular.module('PackageApp').factory('packageService', function() {

    var packs = [{
        id: "AE1111",
        sen: "Adam",
        rec: "Eve",
        desc: "The Apple",
        status: "processing"
    }, {
        id: "PH1954",
        sen: "Prometheus",
        rec: "Humanity",
        desc: "The Fire",
        status: "retour"
    }, {
        id: "GT1212",
        sen: "Greeks",
        rec: "Troy City",
        desc: 'Wooden Horse',
        status: "transit"
    }, {
        id: "KK3427",
        sen: "Karl",
        rec: "Klara",
        desc: "Corals",
        status: "delivered"
    },{
        id: "ZH0967",
        sen: "Zarathustra",
        rec: "Foolish people",
        desc: "The Truth",
        status: "retour"
    }, {
        id: "AE2015",
        sen: "Harry S. Truman",
        rec: "Japan",
        desc: '"Fatmans"',
        status: "processing"
    }];
    return {
        getPacks: function() {
            return packs;
        },
        getPackByStatus: function(status) {
            return packs.filter(function(elem) {
                return elem.status == status;
            });
        },
        getPackByID: function(id) {
            return packs.filter(function(elem) {
                return elem.id == id;
            });
        },
        addPack: function(pack) {
            packs.push(pack);
        },
        changeStatus: function(id) {
            for (var i = 0; i < packs.length; i++) {
                if (packs[i].id === id) {
                    switch (packs[i].status) {
                        case 'processing':
                            packs[i].status = 'transit';
                            break;
                        case 'transit':
                            packs[i].status = 'delivered';
                            break;
                        case 'retour':
                            packs[i].status = 'processing';
                            break;
                        case 'delivered':
                            packs[i].status = 'retour';
                            break;
                        default:
                            packs[i].status = 'processing';
                    }
                }
            }
        },
        deletePack: function(del) {
            packs = packs.filter(function(elem) {
                return elem.id !== del;
            });
        }
    };
})