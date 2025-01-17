using { managed } from '@sap/cds/common';

using { db.models } from '.';

namespace db.models;

entity PurchaseOrderHeaders: managed {
    key id: UUID;
        company: String(4);
        purchasingOrganization: String(4);
        purchasingGroup: String(3);
        items: Composition of many models.PurchaseOrderItems on items.headerId = $self;
}
