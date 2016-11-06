
export /**
 * name
 */
  class Reward implements InboxBodyItem {
  public points: number;
  public targetPoints: number;
  public promoTxt: string;
  public claimToken: string;
  public branches: Branch[];
  public business: Business;
  public tag: string = 'Reward';

  public get completionPercents(): number {
    return (this.points * 100) / this.targetPoints;
  }
  public get isCompleted(): boolean {
    return this.points === this.targetPoints;
  }
  public get canClaim(): boolean {
    return this.isCompleted && this.claimToken != null && this.claimToken.length > 0;
  }
  public get body(): string {
    return `${this.points}/${this.targetPoints}
    (${this.completionPercents}%)` + (this.canClaim ? ' Claim Now!' : '');
  }

  public get subject(): string {
    return `${this.promoTxt} `;
  }

}

export /**
 * name
 */
  class Receipt implements InboxBodyItem {
  public branch: Branch;
  public business: Business;
  public total: number;
  public currency: string;
  public currencySymbol: string = '₪';
  public receiptId: string;
  public receiptItems: ReceiptItem[];
  public tag: string = 'Receipt';
  public starred: boolean;

  public get body(): string {
    return `${this.branch.name}`;
  }

  public get subject(): string {
    return `${this.total} ${this.currency} at ${this.branch.name}`;
  }
}

export class Branch {
  public name: string;
  public address?: string;
  public phone?: string;

}

export class Business {

  public name: string;
  public iconName: string;
}

export class ReceiptItem {
  public name: string;
  public quantity: number;
  public price: number;
  public total: number;
}

export class InboxMessage {

  id: string;
  name: string;
  get subject(): string {
    if (this.bodyItem) {
      return this.bodyItem.subject;
    } else {
      return 'N/A';
    }
  }
  date: number;
  get body(): string {
    if (this.bodyItem) {
      return this.bodyItem.body;
    } else {
      return 'N/A';
    }
  }
  pic: string;
  address: string;
  branch: Branch;
  business: Business;
  bodyItem: InboxBodyItem;
  get tag() {
    if (this.bodyItem) {
      return this.bodyItem.tag;
    } else {
      return 'N/A';
    }
  }
  icon: string;
  labels: ['inbox'];
}
export class InboxTab {
  label: string;
  name: string;
  newItems?: number;
}

export interface InboxBodyItem {
  subject: string;
  body: string;
  tag: string;
}
