package com.example.farmkart.entity;

import java.util.HashSet;
import java.util.Set;

import com.example.farmkart.constants.Role;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User extends BaseEntity {
	@Column(nullable = false)
	private String fullName;

	@Column(nullable = false, unique = true)
	private String email;

	@Column(unique = true)
	private String phone;

	@Column(nullable = false)
	private String passwordHash;

	@Column(name = "profile_image")
	private String profileImageUrl;

	@Column(nullable = false)
	private String status = "ACTIVE";

	@Column(nullable = false)
	private boolean active = true;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Role role = Role.CUSTOMER;

	@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
	private Set<Address> addresses = new HashSet<>();

	@OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
	private SellerProfile sellerProfile;

	@OneToOne(mappedBy = "user", fetch = FetchType.LAZY)
	private DeliveryProfile deliveryProfile;

	public boolean isActive() {
		return active && "ACTIVE".equalsIgnoreCase(status);
	}

	@Transient
	public Set<Role> getRoles() {
		return Set.of(role);
	}

	public void setRoles(Set<Role> roles) {
		this.role = roles == null || roles.isEmpty() ? Role.CUSTOMER : roles.iterator().next();
	}
}
