// https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallNetworkRuleCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#action FirewallNetworkRuleCollection#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}
  */
  readonly azureFirewallName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#name FirewallNetworkRuleCollection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#priority FirewallNetworkRuleCollection#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#resource_group_name FirewallNetworkRuleCollection#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#rule FirewallNetworkRuleCollection#rule}
  */
  readonly rule: FirewallNetworkRuleCollectionRule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#timeouts FirewallNetworkRuleCollection#timeouts}
  */
  readonly timeouts?: FirewallNetworkRuleCollectionTimeouts;
}
export interface FirewallNetworkRuleCollectionRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#description FirewallNetworkRuleCollection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#destination_addresses FirewallNetworkRuleCollection#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}
  */
  readonly destinationFqdns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}
  */
  readonly destinationIpGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#destination_ports FirewallNetworkRuleCollection#destination_ports}
  */
  readonly destinationPorts: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#name FirewallNetworkRuleCollection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#protocols FirewallNetworkRuleCollection#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#source_addresses FirewallNetworkRuleCollection#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}
  */
  readonly sourceIpGroups?: string[];
}

function firewallNetworkRuleCollectionRuleToTerraform(struct?: FirewallNetworkRuleCollectionRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationAddresses),
    destination_fqdns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationFqdns),
    destination_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationIpGroups),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationPorts),
    name: cdktf.stringToTerraform(struct!.name),
    protocols: cdktf.listMapper(cdktf.stringToTerraform)(struct!.protocols),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceAddresses),
    source_ip_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpGroups),
  }
}

export interface FirewallNetworkRuleCollectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#create FirewallNetworkRuleCollection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#delete FirewallNetworkRuleCollection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#read FirewallNetworkRuleCollection#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html#update FirewallNetworkRuleCollection#update}
  */
  readonly update?: string;
}

function firewallNetworkRuleCollectionTimeoutsToTerraform(struct?: FirewallNetworkRuleCollectionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html azurerm_firewall_network_rule_collection}
*/
export class FirewallNetworkRuleCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_firewall_network_rule_collection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/firewall_network_rule_collection.html azurerm_firewall_network_rule_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallNetworkRuleCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallNetworkRuleCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_firewall_network_rule_collection',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._action = config.action;
    this._azureFirewallName = config.azureFirewallName;
    this._name = config.name;
    this._priority = config.priority;
    this._resourceGroupName = config.resourceGroupName;
    this._rule = config.rule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action: string;
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // azure_firewall_name - computed: false, optional: false, required: true
  private _azureFirewallName: string;
  public get azureFirewallName() {
    return this.getStringAttribute('azure_firewall_name');
  }
  public set azureFirewallName(value: string) {
    this._azureFirewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFirewallNameInput() {
    return this._azureFirewallName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // priority - computed: false, optional: false, required: true
  private _priority: number;
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // rule - computed: false, optional: false, required: true
  private _rule: FirewallNetworkRuleCollectionRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: FirewallNetworkRuleCollectionRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FirewallNetworkRuleCollectionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: FirewallNetworkRuleCollectionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      azure_firewall_name: cdktf.stringToTerraform(this._azureFirewallName),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      rule: cdktf.listMapper(firewallNetworkRuleCollectionRuleToTerraform)(this._rule),
      timeouts: firewallNetworkRuleCollectionTimeoutsToTerraform(this._timeouts),
    };
  }
}
